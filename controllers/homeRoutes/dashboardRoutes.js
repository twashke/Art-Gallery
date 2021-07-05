const router = require("express").Router();
const { Art, User, Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
     try {
          const userArtDetails = await User.findOne({
               where: {
                    id: req.session.user_id,
               },
               attributes: ["id"],
               include: [
                    {
                         model: Art,
                         attributes: ["id", "img_url", "art_name", "technique", "dimension", "price", "other_details"],
                    },
               ],
          });
          console.log(userArtDetails);
          const userArts = userArtDetails.get({ plain: true });
          console.log(userArts);
          res.render("dashboard", {
               userArts,
               loggedIn: true,
          });
     } catch (err) {
          console.log(err);
          res.status(500).json(err);
     }
});

router.get("/add", (req, res) => {
     res.render("dashboardAddArt", {
          loggedIn: true,
     });
});

router.get("/update/:id", async (req, res) => {
     const artDetails = await Art.findByPk(req.params.id);
     const art = artDetails.get({ plain: true });
     res.render("dashboardDetail", { art, loggedIn: true });
});
module.exports = router;