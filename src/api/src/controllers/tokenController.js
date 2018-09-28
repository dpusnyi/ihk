import config from "../../config";
import _ from 'lodash';
import generator from 'generate-password';
import request from 'request';
import http from 'http';
const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";


class tokenController {

  async createLog(req) {
    let log = req.body
    try {
      let client = await mongoClient.connect(url);
      let db = client.db("logsdb");
      let collection = db.collection("logs");
      let result = await collection.insertOne(log);
      client.close();
      return result;
    } catch (err) {
      console.log(err)
    }
  }

  async retrieveLog(req) {
    let search = req.body
    try {
      let client = await mongoClient.connect(url);
      let db = client.db("logsdb");
      let collection = db.collection("logs");
      let result = await collection.find(search).toArray();
      client.close();
      result.forEach( (item, i, arr) => {
        delete item._id
      })
      return result;
    } catch (err) {
      console.log(err)
    }
  }

}

export default new tokenController();