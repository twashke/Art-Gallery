const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const artRoutes = require("./artRoutes.js");
const commentRoutes = require("./commentRoutes.js");

router.use("/arts", artRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
