import { Router } from 'express';
import config from "../config";
import tokenController from './controllers/tokenController';
const routes = Router();

const runAction = (action, req, res) =>  {
    console.log('here')
    action(req, res)
      .then(data => {
        console.log("Data : " + data);
        res.status(200).send(data);
        return;
      })
      .catch(err => {
        console.log("Router: " + err);
        res
          .status(err.status || 400)
          .send({
            err: err.name ? err.name : "Error",
            message: err.message
          });
        return;
      });
};


// /**
//  * POST /list
// */
routes.post('/create', (req, res) => runAction(tokenController.createLog, req, res));
routes.post('/retrieve', (req, res) => runAction(tokenController.retrieveLog, req, res));
routes.post('/company-retrieve', (req, res) => runAction(tokenController.retrieveCompany, req, res));
routes.post('/company-file', (req, res) => runAction(tokenController.createFile, req, res));

// /**
//  * GET /list
// */
routes.get('/company-file/:companyId', (req, res) => runAction(tokenController.retrieveFile, req, res));


export default routes;
