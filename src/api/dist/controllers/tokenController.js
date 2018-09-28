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

class tokenController {

  async createLog(req) {
    let log = req.data;
    mongoClient.connect(url, (err, client) => {
      const db = client.db("logsdb");
      const collection = db.collection("logs");
      collection.insertOne(log, (err, results) => {
        client.close();
      });
    });
  }

  async retrieveLog(req) {
    let search = req.data;
    mongoClient.connect(url, (err, client) => {
      const db = client.db("logsdb");
      const collection = db.collection("logs");
      if (err) return console.log(err);
      collection.find(search).toArray((err, results) => {
        client.close();
      });
    });
  }

}

exports.default = new tokenController();
//# sourceMappingURL=tokenController.js.map