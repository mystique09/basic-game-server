const dotenv = require('dotenv');

class Env {
  // database config
  db_user;
  db_pass;
  db_host;
  db_port;
  db_name;

  // redis config
  redis_url;

  // server config
  host;
  port;

  constructor() {
    dotenv.config();

    this.db_user = process.env.DB_USER;
    this.db_pass = process.env.DB_PASS;
    this.db_host = process.env.DB_HOST;
    this.db_port = process.env.DB_PORT;
    this.db_name = process.env.DB_NAME;
    this.redis_url = process.env.REDIS_URL;
    this.host = process.env.HOST;
    this.port = process.env.PORT;
  }
}

module.exports = { Env };