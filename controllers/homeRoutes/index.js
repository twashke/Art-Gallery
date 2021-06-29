const router = require("express").Router();

const homeRoutes = require("./homeRoutes")
const dashboardRoutes = require("./dashboardRoutes");
const collectionRoutes = require("./collectionRoutes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/collection", collectionRoutes);


module.exports = router;