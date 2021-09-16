const express = require("express");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));


app.get("/", function(req,res){
    res.render("load");
  })
  
  app.get("/home", function(req,res){
    res.render("home");
  })

  app.get("/appointments", function(req,res){
    res.render("appointments");
  })

  app.get("/pricing", function(req,res){
    res.render("pricing");
  })

  app.get("/products", function(req,res){
    res.render("products");
  })

app.listen(process.env.PORT || 8000, function() {
    console.log("Server started on port 8000");
  });