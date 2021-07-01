const router = require("express").Router();
const { Art, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// // Display all art for main page.
// router.get('/', async (req, res) => {
//      const artData = await Art.findAll().catch((err) => {
//           res.json(err);
//      });
//      const arts = artData.map((art) => art.get({ plain: true }));
//      res.render('collection', { arts });
// });

// //Display art details
// router.get('/:id', async (req, res) => {
//      const detData = await Art.findByPk(req.params.id);
//      const det = detData.get({ plain: true });
//      res.render('collectionDetail', { det });
// });

//get all pieces of art for collection page
router.get("/", withAuth, async (req, res) => {
  try {
    const artData = await Art.findAll({
      order: [["created_at", "DESC"]],
    });
    const arts = artData.map((art) => art.get({ plain: true }));

    res.render("collection", {
      arts,
      // Pass the logged in flag to the template
      //correct in nav as well with same var name
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get details for an art for collection page with art details,
//comments for that particular art by all users with their names
router.get("/:id", async (req, res) => {
  try {
    const artDetails = await Art.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Comment,
          attributes: ["id", "text", "art_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    if (!artDetails) {
      res.status(404).json({ message: "No art found" });
      return;
    }
    const artDetailsForId = artDetails.get({ plain: true });

    //res.json(artDetailsForId);
    res.render("collectionDetail", {
      artDetailsForId,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
