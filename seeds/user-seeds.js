const { User } = require("../models/index");

const userData = [
     {
          username: "jack",
          email: "jack@daniels.com",
          // password12345 use for login
          password: "$2b$10$HPcu.H61TPEWlWO51kWySuINwhtAhkkh65tFrXesb31gCbj/zBCEu",
     },
     {
          username: "jose",
          email: "jose@cuervo.com",
          // password12345 use for login
          password: "$2b$10$C2Y9drc3RV208DIoEMNW4.J7Wa9F6v0QsBI7oiLqMvh2vnmKLCQ5i",
     },
     {
          username: "jim",
          email: "jim@bean.com",
          // password12345 use for login
          password: "$2b$10$.vknOXafaRndzpwc4MMjzusGWNUzg5P14KvKNgiMLL96gutlaQ7Dy",
     },
     {
          username: "jill",
          email: "jill@valentine.com",
          // password12345 use for login
          password: "$2b$10$bqd5z4XwqUl9iUreG8QrIO4jZHYelfZ05cIbQeQKkJ2cEIQunKmkK",
     },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
