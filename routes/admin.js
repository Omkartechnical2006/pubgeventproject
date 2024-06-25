const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Contact = require("../models/contact");
const mongoose = require("mongoose");
const dbUrl = process.env.ATLASDB_URL;
async function main() {
    await mongoose.connect(dbUrl);
}
main();
router.route("/")
    .get((req, res) => {
        res.render("listings/admin.ejs");
    })
    .post(async (req, res) => {
        let username = process.env.USER;
        let password = process.env.PASSWORD;
        let err = "your field is empty";
        let err2 = "something went wrong";
        let { uname, psw } = req.body;
        if (uname === username && psw === password) {
            let users = await User.find();
            let contacts = await Contact.find();
            res.render("listings/detail.ejs", { contacts, users });
            // show users details
        } else if (!uname || !psw) {
            res.redirect("/admin");
        } else {
            res.redirect("/admin");
        }
        //error message show.....
    });

module.exports = router;