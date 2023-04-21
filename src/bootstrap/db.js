const mysql = require('mysql');
const { createClient } = require('redis');

class Database {
  conn;

  constructor(config) {
    try {
      const connection = mysql.createConnection(config);
      this.conn = connection;
    } catch(e) {
      console.log(`Unable to connect database: ${e.description}`);
    }
  }

  connect() {
    console.log('[INFO] connecting to database');
    this.conn.connect();
  }

  close() {
    console.log('[INFO] closing database connection');
    this.conn.end();
  }
}

class Redis {
  client;

  constructor(url) {
    try {
      const client = createClient({
        url
      });

      this.client = client;
    } catch(e) {  
      console.log(`Unable to connect redis: ${e.description}`);
    }
  }

  connect() {
    console.log('[INFO] connecting to redis');
    this.client.connect();
  }

  disconnect() {
    console.log('[INFO] closing redis client');
    this.client.disconnect();
  }
}

module.exports = {
  Database, Redis
};