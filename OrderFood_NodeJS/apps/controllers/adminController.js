var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Food = require("./../models/food");
const Category = require("../models/category");
var DataService = require("./../services/dataService");
var UserService = require("./../services/userService");
var CartService = require("./../services/cartService");
var config = require('../../config/setting.json');
var verifyToken = require("../util/VerifyToken");
const _ = require('lodash');
//jwt
const jsonwebtoken = require("jsonwebtoken");
const jwtExpirySeconds = 300

router.get("/", async function (req, res) {
    var dataService = new DataService();
    var categories =  await dataService.getCategoryList();
    res.render("adminView/adminPage", {page: 'food', categoryList : categories});
});
//FOOD MANAGE
router.get("/foodManage", function (req, res) {
    res.render("adminView/adminPage", {page: 'food'});
});
router.get("/getFoodList", async function (req, res) {
    var dataService = new DataService();
    var data = await dataService.getFoodList();
    res.json(data);
});
router.post("/addFood/", async function (req, res) {
    var dataService = new DataService();
    var addFood = new Food();
    addFood._id = new ObjectId(req.body._id);
    addFood.name = req.body.name;
    addFood.image = req.body.image;
    addFood.price = req.body.price;
    addFood.discount = req.body.discount;
    await dataService.insertFood(addFood);
    res.render("adminView/adminPage", {page: 'foodManage'});
});
router.get("/editFood/:id", async function (req, res) {
    var dataService = new DataService();
    var data = await dataService.getFoodById(new ObjectId(req.params.id));
    res.json(data);
});
router.post("/editFood/", async function (req, res) {
    var dataService = new DataService();
    var updateFood = new Food();
    updateFood._id = new ObjectId(req.body._id);
    updateFood.name = req.body.name;
    updateFood.image = req.body.image;
    updateFood.price = req.body.price;
    updateFood.discount = req.body.discount;
    await dataService.updateFood(updateFood);
    res.render("adminView/adminPage", {page: 'foodManage'});
});
router.post("/deleteFood/:id", async function(req,res){
    var dataService = new DataService();
    await dataService.deleteFood(req.params.id);
    res.render("adminView/adminPage", {page: 'foodManage'});
});
router.get("/getCategoryList", async function(req,res){
    var dataService = new DataService();
    var data = await dataService.getCategoryList();
    res.json({data});
});
router.get("/getCategoryById/:id", async function(req,res){
    var dataService = new DataService();
    var category =  await dataService.getCategoryById(req.params.id);
    res.json(category);
});

//CATEGORY MANAGE
router.get("/categoryManage", function (req, res) {
    res.render("adminView/adminPage", {page: 'categoryManage'});
});
router.get("/getCategoryList", async function (req, res) {
    var dataService = new DataService();
    var data = await dataService.getCategoryList();
    res.json(data);
});
router.post("/addCategory/", async function (req, res) {
    var dataService = new DataService();
    var addCategory = new Category();
    addCategory._id = new ObjectId(req.body._id);
    addCategory.name = req.body.name;
    await dataService.insertCategory(addCategory);
    res.render("adminView/adminPage", {page: 'categoryManage'});
});
router.get("/editCategory/:id", async function (req, res) {
    var dataService = new DataService();
    var data = await dataService.getCategoryById(req.params.id);
    res.json(data);
});
router.post("/editCategory/", async function (req, res) {
    var dataService = new DataService();
    var updateCategory = new Category();
    updateCategory._id = new ObjectId(req.body._id);
    updateCategory.name = req.body.name;
    await dataService.updateCategory(updateCategory);
    res.render("adminView/adminPage", {page: 'categoryManage'});
});
router.post("/deleteCategory/:id", async function(req,res){
    var dataService = new DataService();
    await dataService.deleteCategory(req.params.id);
    res.render("adminView/adminPage", {page: 'categoryManage'});
});

//USER MANAGE
router.get("/userManage", function (req, res) {
    res.render("adminView/adminPage", {page: 'userManage'});
});
router.get("/getUserList", async function (req, res) {
    var userService = new UserService();
    var data = await userService.getUserList();
    res.json({data});
});

//CART MANAGE
router.get("/cartManage", function (req, res) {
    res.render("adminView/adminPage", {page: 'cartManage'});
});
router.get("/getCartList", async function (req, res) {
    var cartService = new CartService();
    var data = await cartService.getCartList();
    res.json({data});
});
router.get("/cartDetailManage/:cart_id", async function (req, res) {
    var cartService = new CartService();
    var data = await cartService.getCartDetailList(req.params.cart_id);
    res.render("adminView/adminPage", {page: 'cartDetailManage', data});
});

module.exports = router;
