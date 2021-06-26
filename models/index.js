// import models
const User = require("./User");
const Art = require("./Art");
const Comment = require("./Comment");

// User can have many Art
// Art belongs to a User
User.hasMany(Art, {
  foreignKey: "user_id",
});

Art.belongsTo(User, {
  foreignKey: "user_id",
});

// Art can have many comments
// Comments belongs to an Art
Art.hasMany(Comment, {
  foreignKey: "art_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Art, {
  foreignKey: "art_id",
  // onDelete: "CASCADE",
  // onUpdate: "CASCADE",
});

// User can provide many comments
// Comments belongs to a user
User.hasMany(Comment, {
  foreignKey: "user_id",
  //   onDelete: "CASCADE",
  //   onUpdate: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  //   onDelete: "CASCADE",
  //   onUpdate: "CASCADE",
});

module.exports = {
  User,
  Art,
  Comment,
};
