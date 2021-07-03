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

//will discard this after everything is up
// /api/comments/id id is artid
// adding comment for a particular art
// router.post("/:id", (req, res) => {
//   Comment.create({
//     text: req.body.text,
//     art_id: req.params.id,
//     // change body with session when using auth
//     user_id: req.body.user_id,
//   })
//     .then((commentData) => {
//       res.json(commentData);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });
//with auth and check if req.session is true
router.post("/", withAuth, (req, res) => {
  Comment.create({
    text: req.body.text,
    art_id: req.body.art_id,
    // change body with session when using auth
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
