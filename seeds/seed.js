const seedUser = require("./user-seeds");
// const seedPosts = require("./post-seeds");
// const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUser();
  console.log("\n----- User SEEDED -----\n");

  //   await seedPosts();
  //   console.log("\n----- Post SEEDED -----\n");

  //   await seedComments();
  //   console.log("\n----- Comments SEEDED -----\n");

  process.exit(0);
};

seedAll();
