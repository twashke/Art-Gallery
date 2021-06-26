const seedUser = require("./user-seeds");
const seedArt = require("./art-seeds");
const seedComment = require("./comment-seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUser();
  console.log("\n----- User SEEDED -----\n");

  await seedArt();
  console.log("\n----- Art SEEDED -----\n");

  await seedComment();
  console.log("\n----- Comment SEEDED -----\n");

  process.exit(0);
};

seedAll();
