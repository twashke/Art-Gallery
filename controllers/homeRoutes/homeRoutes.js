const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", { loggedIn: req.session.logged_in });
  } catch {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

//for signup rendering
router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request ti another route
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // otherwise render login page
  res.render("signup");
});

module.exports = router;
