var express = require("express");
var router = express.Router();
router.get("/", function(req,res){
    res.json({"message": "đây là home pages"});
    res.json({"message": "đây là home pages"});
    res.json({"message": "xin chao"});
    res.json({"message": "xin chao ngay 2"});
    res.json({"message": "xin chao ngay 3"});
});
module.exports = router;
//