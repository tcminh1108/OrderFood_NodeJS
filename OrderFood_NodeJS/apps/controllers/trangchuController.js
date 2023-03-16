var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.render("homeView/home");
});

//Hiển thị trang login
router.get("/", function(req,res){
    res.render("homeView/Login");
});

//Hiển thị trang register
router.get("/", function(req,res){
    res.render("homeView/register");
});
module.exports = router;
