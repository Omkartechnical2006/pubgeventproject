const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const port = process.env.PORT;
const rewardclaim = require("./routes/rewardclaim.js");
const admin = require("./routes/admin.js");
const contact = require("./routes/contact.js");
const methodOverride = require("method-override");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);

const dbUrl = process.env.ATLASDB_URL;
// connect to mongoose 
async function main() {
    await mongoose.connect(dbUrl);
}
main().then(() => {
    console.log("connected to DB");
}).catch(err => { console.log(err) });

app.get("/", (req, res) => {
    res.render("listings/home.ejs")
});
// rewardclaim
app.use("/rewardclaim",rewardclaim);

// clear localstorage
app.get("/clear",(req,res)=>{
    res.render("clear/clear.ejs")
});

// admin
app.use("/admin",admin);

//contact
app.use("/contact",contact);

app.get("/track", (req, res) => {
    res.render("listings/track.ejs");
});
app.get("/FAQ", (req, res) => {
    res.render("listings/faq.ejs");
})
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})
