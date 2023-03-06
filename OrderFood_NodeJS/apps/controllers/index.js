var express = require("express");
var router = express.Router();
router.get("/", function(req,res){
    res.json({"message": "đây là home pages"});
    res.json({"message": "đây là home pages"});
});
module.exports = router;