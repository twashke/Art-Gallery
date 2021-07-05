const router = require("express").Router();
const { Art, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const artData = await Art.findAll({
      order: [["created_at", "DESC"]],
    });
    const arts = artData.map((art) => art.get({ plain: true }));

    res.render("collection", {
      arts,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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
