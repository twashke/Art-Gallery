const router = require("express").Router();
const { Comment, Art, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all comments  /api/comments
router.get("/", withAuth, (req, res) => {
  Comment.findAll({
    attributes: ["id", "text", "user_id", "art_id"],
  })
    .then((commentData) => res.json(commentData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// /api/comments/id here is art id
//get all comment for particular art
router.get("/:id", (req, res) => {
  Comment.findAll(
    {
      where: {
        art_id: req.params.id,
      },
    },
    {
      attributes: ["text"],
    }
  )
    .then((commentData) => res.json(commentData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Comment.create({
    text: req.body.text,
    art_id: req.body.art_id,
    user_id: req.session.user_id,
  })
    .then((commentData) => {
      res.json(commentData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
