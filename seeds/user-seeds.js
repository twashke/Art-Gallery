const { User } = require("../models/index");

const userData = [
     {
          username: "Sal",
          email: "sal@hotmail.com",
          password: "password12345",
     },
     {
          username: "Lernantino",
          email: "lernantino@gmail.com",
          password: "password12345",
     },
     {
          username: "Amiko",
          email: "amiko2k20@aol.com",
          password: "password12345",
     },
     {
          username: "Thugfencer",
          email: "thugfencer@thuglife.com",
          password: "12345abcde",
     },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
