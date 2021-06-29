const router = require("express").Router();
const cloudinary = require("cloudinary").v2;
const artUpload = require("../../config/cloudinaryconfig");
const { Art, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// id,art_name,artist_name,technique,dimension,price,other_details,img_url,user_id
// /api/arts/ will save art to cloudinary and db

router.post("/", artUpload.single("myimage"), (req, res) => {
  Art.create({
    art_name: req.body.art_name,
    artist_name: req.body.artist_name,
    technique: req.body.technique,
    dimension: req.body.dimension,
    price: req.body.price,
    img_url: req.file.path,
    user_id: req.session.user_id,
    public_id: req.file.filename,
    other_details: req.body.other_details,
  })
    .then((addedData) => {
      res.json(addedData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// delete art by artid   endpoint /api/arts/4
router.delete("/:id", (req, res) => {
  Art.findOne(
    {
      where: {
        id: req.params.id,
      },
    },
    {
      attributes: ["public_id"],
    }
  ).then((deleteArt) => {
    const publicIdToBeDeleted = deleteArt.get({ plain: true });
    cloudinary.uploader.destroy(publicIdToBeDeleted.public_id, (err) => {
      if (err) console.log(err, "Not able to delete an image from Cloudinary");
      //  console.log(publicIdToBeDeleted.public_id, "deleted");
    });
  });

  Art.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteArt) => {
      if (!deleteArt) {
        res.status(404).json({ message: "No art found" });
        return;
      }
      res.json(deleteArt);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// endpoint /api/arts/1
// update an art by artid
router.put("/:id", artUpload.single("myimage"), (req, res) => {
  const updateData = {
    art_name: req.body.art_name,
    artist_name: req.body.artist_name,
    technique: req.body.technique,
    dimension: req.body.dimension,
    price: req.body.price,
    other_details: req.body.other_details,
  };
  //  console.log(req.file);
  // if picture is attched means we need to get new public_id for a file
  // and the image url
  if (req.file) {
    updateData.public_id = req.file.filename;
    updateData.img_url = req.file.path;
  }

  // delete image from cloudinary before updating in database
  Art.findOne(
    {
      where: {
        id: req.params.id,
      },
    },
    {
      attributes: ["public_id"],
    }
  )
    .then((artData) => {
      const publicIdTobeDeleted = artData.get({ plain: true });

      // destroying  image from cloudinary with public_id
      cloudinary.uploader.destroy(publicIdTobeDeleted.public_id, (err) => {
        if (err) console.log(err, "Not able to delete image");
        // console.log(publicIdTobeDeleted.public_id, " deleted");
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  Art.update(updateData, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedData) => {
      console.log(updatedData);
      if (!updatedData) {
        res.status(404).send({
          success: false,
          message: "No art found",
        });
        return;
      }
      res.json(updatedData);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
