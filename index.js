const express = require("express");
const app = express();
const path = require("path");
const getYouTubeVideoID = require("./utils/urlParse.js");

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
    let url = req.query.url;
    const vId  = getYouTubeVideoID(url);
    if(vId){
        res.render("play.ejs", {vId});
    }else{
        res.render("error.ejs");
    }
});

//Server listening
app.listen("8080", ()=>{
    console.log("Server listening at port 8080");
});