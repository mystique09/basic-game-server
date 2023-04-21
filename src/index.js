const express = require('express');
// bootstraps
const env = require('./bootstrap/env');
const db = require('./bootstrap/db');
const server = require('./bootstrap/server');

function main() {
  const config = new env.Env();
  const database = new db.Database({
    host: config.db_host,
    user: config.db_user,
    password: config.db_pass,
    database: config.db_name
  });
  const redis = new db.Redis(config.redis_url);

  const app = new server.Server(express, config, database, redis);
  app.setup();
  app.start();
}

main();