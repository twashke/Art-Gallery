const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        res.render("homepage", {
        });
    } catch {
        res.status(500).json(err);
    }
});

// router.get("/dashboard", async(req,res) => {
//     // If the user is already logged in, redirect the request to another route
//     if (req.session.logged_in) {
//         res.redirect("dashboard");
//         return;
//     }

//     res.render("/login");
// });

router.get("/collection", (req, res) => {

    res.render("collection");
});



router.get("/dashboard", (req, res) => {

    res.render("dashboard");
});


// Temporay until sign in feature is entered to test 

// router.get("/collection", async (req,res) => {
//     // If the user is already logged in, redirect the request to another route
//     if (!req.session.logged_in) {
//         res.redirect("collection");
//         return;
//     }

//     res.render("login");
// });


router.get("/login", async (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect("dashboard");
        return;
    }

    res.render("login");
});


router.get("/logout", (req, res) => {

    res.render("homepage");
});


module.exports = router;
