const router = require("express").Router();
const { User } = require("../../models")

router.post("/", async (req, res) => {
    // console.log("Before try statement: ", res);
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
            // console.log("In save statement: ", userData);
        });
    } catch (err) {
        res.status(400).json(err);
        // console.log("Catch error: ", error);
    }
});

router.post("/login", async (req, res) => {
    // console.log("Before try statement: ", res);
    try {
        const userData = await User.findOne({ where: { email: req.body.email} });

        if(!userData) {
            res.status(400).json({ message: "Incorrect email or password, please try again" });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: "Incorrect email or password, please try again" });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: "You are now logged in, welcome to the Art Gallery"});
            // console.log("In save statement: ", userData);
        });
    } catch(err) {
        res.status(400).json(err);
        // console.log("Catch error: ", error);
    }
});

router.post("/logout", (req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
