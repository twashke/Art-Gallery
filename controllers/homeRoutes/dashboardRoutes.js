const router = require("express").Router();
const { Art, User, Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

// // Display all art for main page.
// router.get('/', async (req, res) => {
//      const artData = await Art.findAll().catch((err) => {
//           res.json(err);
//      });
//      const arts = artData.map((art) => art.get({ plain: true }));
//      res.render('dashboard', { arts });
// });

// //Display art details
// router.get('/:id', async (req, res) => {
//      const detData = await Art.findByPk(req.params.id);
//      const det = detData.get({ plain: true });
//      res.render('dashboardDetail', { det });
// });

// /dashboard get all the arts by a user

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
          attributes: ["id", "img_url", "art_name"],
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
  res.render("addArt", {
    loggedIn: true,
  });
});

router.get("/update/:id", async (req, res) => {
  const artDetails = await Art.findByPk(req.params.id);
  const art = artDetails.get({ plain: true });

  res.render("updateArt", { art, loggedIn: true });
});
module.exports = router;
