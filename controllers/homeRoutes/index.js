const router = require("express").Router();

const homeRoutes = require("./homeRoutes.js");
const dashboardRoutes = require("./dashboardRoutes.js");
const collectionRoutes = require("./collectionRoutes.js");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/collection", collectionRoutes);

module.exports = router;
