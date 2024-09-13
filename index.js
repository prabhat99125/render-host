const env = require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.set("view engine", "ejs");
app.use(express.static(path.join( __dirname, "fonthend")));

app.get("/", (req, res) => {
     fs.readFile(`${__dirname}/user.json`, "utf-8", (err, data) => {
        const user = JSON.parse(data)
        res.render("index", {user});
    });
    
    
});

app.post("/creat", (req, res) => {
    fs.writeFile(`${__dirname}/user.json`, JSON.stringify(req.body), (err, data) => {

    });
    // res.send(req.body);
    res.redirect("/")
})


app.listen(port, () => console.log(`sarver is start in port no ${port}`));