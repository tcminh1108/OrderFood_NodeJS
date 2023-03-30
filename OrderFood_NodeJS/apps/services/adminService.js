const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class AdminService{
    databaseConnection = require('./../database/database');
    food = require('./../models/food');

    client;
    database;
    foodCollection;
    constructor(){
        this.client = this.databaseConnection.getMongoClient();
        this.database =  this.client.db(config.mongodb.database);
        this.foodCollection = this.database.collection("foods");
    }
    async getFood(){
        return await this.foodCollection.find().toArray();
    }
    async getFoodById(id){
        return await this.foodCollection.findOne({"_id": new ObjectId(id)},{});
    }
    async insertFood(food){
        return await this.foodCollection.insertOne(food);
    }
    async updateFood(food){
        return await this.foodCollection.updateOne({"_id": new ObjectId(food._id)},{$set: food});
    }
    async deleteFood(id){
        return await this.foodCollection.deleteOne({"_id": new ObjectId(id) });
    }
}
module.exports = AdminService;
