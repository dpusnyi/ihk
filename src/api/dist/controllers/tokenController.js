'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _generatePassword = require('generate-password');

var _generatePassword2 = _interopRequireDefault(_generatePassword);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const eosjs = require("eosjs");
const fetch = require("node-fetch");
const { TextDecoder, TextEncoder } = require("text-encoding");

class tokenController {

  async createLog(req) {
    console.log(req.body);
    let log = req.body;
    try {
      let client = await mongoClient.connect(url);
      let db = client.db("logsdb");
      let collection = db.collection("logs");
      let result = await collection.insertOne(log);
      client.close();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async retrieveLog(req) {
    let search = req.body;
    if (search.hash) try {
      let client = await mongoClient.connect(url);
      let db = client.db("logsdb");
      let collection = db.collection("logs");
      let result = await collection.findOne({ "hash": search.hash });
      client.close();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

}

exports.default = new tokenController();
//# sourceMappingURL=tokenController.js.map