import config from "../../config";
import _ from 'lodash';
import generator from 'generate-password';
import request from 'request';
import http from 'http';
const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const eosjs = require("eosjs");
const fetch = require("node-fetch");                          
const { TextDecoder, TextEncoder } = require("text-encoding");

class tokenController {

  async createLog(req) {
    let log = req.body
    if (!log.hash && log.hash.length == 0) return "Error you can't write a record without a hash"
    else
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
    if (!search.hash && search.hash.length == 0) return "Error you can't retrieve a record without a hash"
    else 
      try {
        let client = await mongoClient.connect(url);
        let db = client.db("logsdb");
        let collection = db.collection("logs");
        let result = await collection.find({"hash": search.hash}).toArray();
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
