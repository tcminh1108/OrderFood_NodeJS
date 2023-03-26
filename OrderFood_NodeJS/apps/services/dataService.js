const { ObjectId } = require('mongodb');
var config = require("../../config/setting.json");
class DataService{
    databaseConnection = require('../database/database');
    category = require('../models/category');

    client;
    database;
    categoriesCollection;
    foodsCollection;
    constructor(){
        this.client = this.databaseConnection.getMongoClient();
        this.database =  this.client.db(config.mongodb.database);
        this.categoriesCollection = this.database.collection("categories");
        this.foodsCollection = this.database.collection("foods");
    }
     //lấy món ăn theo id
     async getFoodById(food_id) {
        return await this.foodsCollection.findOne({"_id": new ObjectId(food_id)},{});
    }
    //lấy danh sách loại món ăn
    async getCategoryList() {
        const cursor = await this.categoriesCollection.find({}, {}).skip(0).limit(100);
        return await cursor.toArray();
    }
    //lấy loại món ăn theo id
    async getCategoryById(category_id) {
        return await this.categoriesCollection.findOne({"_id": new ObjectId(category_id)},{});
    }
    //lấy danh sách món ăn
    async getFoodList() {
        const cursor = await this.foodsCollection.find({}, {}).skip(0).limit(100);
        return await cursor.toArray();
    }
}