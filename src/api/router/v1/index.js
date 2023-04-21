const express = require('express');
const morgan = require('morgan');
const router = express.Router();
const loginRouter = require('./login');
const signupRouter = require('./signup');
const gameRouter = require('./game');

function setupRouter(app, dbConn, redisConn, env) {
  const router = express.Router();

  router.use(morgan('tiny'));

  loginRouter.newLoginRouter(router, dbConn, redisConn, env);
  signupRouter.newSignupRouter(router, dbConn, redisConn, env);
  gameRouter.newGameRouter(router, dbConn, redisConn, env);

  app.get('', index); 
  app.use('', router);
}

function index(req, res) {
  return res.send('Basic game server made with expressjs.');
}

module.exports = setupRouter;