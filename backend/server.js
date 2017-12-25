var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParser.json());
var posts = [
    {message:"Helo"},
    {message:"Heloo"},
    
];

app.get("/posts", (req,res) => {
    res.send(posts);
    
});
app.post("/register", (req,res) => {
   var userData = req.body;
    console.log(userData.email);
    res.sendStatus(200);
    
});
app.listen(3000,() => {
    console.log("Running on port 3000");
});
