const setupRouter = require('../api/router/v1');

class Server {
  dbConnection;
  redisClient;
  config;
  expressClient;
  

  constructor(express, config, dbConn, redisClient) {
    this.config = config;
    this.dbConnection = dbConn;
    this.redisClient = redisClient;
    this.serverConfig = config;
    this.expressClient = express();
  }

  setup() {
    setupRouter(this.expressClient, this.dbConnection, this.redisClient, this.config);
  }

 async  start() {
    await this.dbConnection.connect();
    await this.redisClient.connect();

    this.expressClient.listen(this.config.port, () => {
      console.log(`[INFO] Server listening on port: ${this.config.port} `);
    });
  }
}

module.exports = { Server };