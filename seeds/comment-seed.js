const { Comment } = require("../models");

const commentdata = [
  {
    text: "Nice work!",
    user_id: 1,
    art_id: 2,
  },
  {
    text: "Nice work!",
    user_id: 1,
    art_id: 3,
  },
  {
    text: "Nice work!",
    user_id: 2,
    art_id: 1,
  },
  {
    text: "Nice work!",
    user_id: 2,
    art_id: 3,
  },
  {
    text: "Nice work!",
    user_id: 3,
    art_id: 1,
  },
  {
    text: "Nice work!",
    user_id: 3,
    art_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
