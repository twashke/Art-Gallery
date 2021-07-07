const { Comment } = require("../models");

const commentdata = [
     {
          text: "Gorgeous tree, and the Hawaiian Shave Ice truck in the background sets the scene.",
          user_id: 1,
          art_id: 1,
     },
     {
          text: "Nice work!",
          user_id: 2,
          art_id: 1,
     },
     {
          text: "Great details.  Dewdrops are nice.",
          user_id: 3,
          art_id: 10,
     },
     {
          text: "Sharp focus!  Were there filters applied?",
          user_id: 4,
          art_id: 7,
     },
     {
          text: "Mando Mondays... Dent looks great, and mask does not appear to be heavily used",
          user_id: 1,
          art_id: 2,
     },
     {
          text: "Would love to see a version of this on a black background.",
          user_id: 2,
          art_id: 9,
     },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
