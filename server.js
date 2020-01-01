const express = require("express");
const app = express();
const bp = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const db = require("./DBase/url").url;
const path = require("path");
const session = require("express-session");
require("dotenv").config();

mongoose.set("useFindAndModify", false);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected !"))
  .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, "client/build")));
app.use(session({secret:"mano1234", resave: false, saveUninitialized: true, maxAge: new Date(Date.now() + (30 * 86400 * 1000))}));
app.use(bp.json());
app.use("/auth", require("./Controllers/Auth"));
app.use("/blog", require("./Controllers/Blog"));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"), err => console.log(err));
});

app.listen(PORT, () => console.log(`Server at ${PORT}`));
module.exports = app;
