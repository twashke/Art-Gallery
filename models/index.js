const User = require("./User");
const Art = require("./Art");
const Comment = require("./Comment");

User.hasMany(Art, {
  foreignKey: "user_id",
});

Art.belongsTo(User, {
  foreignKey: "user_id",
});

Art.hasMany(Comment, {
  foreignKey: "art_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Art, {
  foreignKey: "art_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Art,
  Comment,
};
