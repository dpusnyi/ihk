'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _tokenController = require('./controllers/tokenController');

var _tokenController2 = _interopRequireDefault(_tokenController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();

const runAction = (action, req, res) => {
  console.log('here');
  action(req, res).then(data => {
    console.log("Data : " + data);
    res.status(200).send(data);
    return;
  }).catch(err => {
    console.log("Router: " + err);
    res.status(err.status || 400).send({
      err: err.name ? err.name : "Error",
      message: err.message
    });
    return;
  });
};

// /**
//  * POST /list
// */
routes.post('/create', (req, res) => runAction(_tokenController2.default.createLog, req, res));
routes.post('/retrive', (req, res) => runAction(_tokenController2.default.retrieveLog, req, res));

exports.default = routes;
//# sourceMappingURL=routes.js.map