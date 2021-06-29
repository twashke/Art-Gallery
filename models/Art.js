const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Art extends Model { }
// id,art_name,artist_name,technique,dimension,price,other_details,img_url,user_id
Art.init(
     {
          id: {
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true,
               autoIncrement: true,
          },
          art_name: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          artist_name: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          //tech used for an art
          technique: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          dimension: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          price: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          other_details: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          img_url: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    isUrl: true,
               },
          },
          user_id: {
               type: DataTypes.INTEGER,
               references: {
                    model: "user",
                    key: "id",
               },
          },
          public_id: {
               type: DataTypes.STRING,
               allowNull: false,
          },
     },
     {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: "art",
     }
);

module.exports = Art;
