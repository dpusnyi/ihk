import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
const app = express();
app.disable('x-powered-by');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST');
  return next();
});

app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => { 
  res
    .status(err.status || 500)
    .send({
      message: err.message
    });
});


export default app;
