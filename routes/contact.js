const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const mongoose = require("mongoose");
const dbUrl = process.env.ATLASDB_URL;
async function main() {
    await mongoose.connect(dbUrl);
}
main();

router.route("/")
    .get((req, res) => {
        res.render("listings/contact.ejs");
    })
    .post(async (req, res) => {
        let { firstname, lastname, country, email, subject } = req.body;
        if (!firstname || !lastname || !country || !subject) {
            res.redirect("/contact");
        } else {
            const contact = new Contact({
                firstname: firstname,
                lastname: lastname,
                country: country,
                email: email,
                subject: subject,
            });
            try {
                let a = await contact.save();
            } catch (err) {
                console.log(err);
            }
            res.redirect("/");
            // we have to show flash message your contact information is being sent successfully
        }
    });
module.exports = router;