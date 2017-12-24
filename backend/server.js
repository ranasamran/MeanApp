var express = require('express');
var app = express();
var posts = [
    {message:"Helo"},
    {message:"Heloo"},
    
]

app.get("/posts", (req,res) => {
    res.send(posts);
    
});

app.listen(3000,() => {
    console.log("Running on port 3000");
});
