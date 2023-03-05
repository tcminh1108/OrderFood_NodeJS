var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.render("homeView/home");
});
module.exports = router;
