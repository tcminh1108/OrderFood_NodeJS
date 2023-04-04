var express = require("express");
var router = express.Router();
router.use("/home", require(__dirname + "/homeController"));
router.use("/user", require(__dirname + "/userController"));
router.use("/food", require(__dirname + "/foodController"));
router.use("/cart", require(__dirname + "/cartController"));
router.get("/", function(req,res){
    res.json({"message": "this is index page"});
});
module.exports = router;
