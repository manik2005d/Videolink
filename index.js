const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended : true}));

//Home Page
app.get("/",(req,res)=>{
    res.render("main.ejs");
});

//Input handled
app.get("/yt",(req,res)=>{
    try{
        let url = req.query.url;
        const vId = url.split('=')[1];
        res.render("play.ejs", {vId});
    }catch(err){
        res.render("error.ejs");
    }
});

//Server listening
app.listen("8080", ()=>{
    console.log("Server listening at port 8080");
});