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
}