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

  async connect() {
    console.log('[INFO] connecting to database');
    this.conn.connect();
    console.log('[INFO] connected to database');
  }

  async close() {
    console.log('[INFO] closing database connection');
    this.conn.end();
    console.log('[INFO] database disconnected');
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

  async connect() {
    console.log('[INFO] connecting to redis');
    this.client.connect();
    console.log('[INFO] connected to redis');
  }

  async disconnect() {
    console.log('[INFO] closing redis client');
    this.client.disconnect();
    console.log('[INFO] redis disconnected');
  }
}

module.exports = {
  Database, Redis
};