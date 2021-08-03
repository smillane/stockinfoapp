const express = require('express');
const dotenv = require('dotenv');
const result = dotenv.config({ path: '.env.local' })
const { Pool, Client } = require('pg')

// error logging for dotenv
if (result.error) {
  console.log(result.parsed)
  throw result.error  
}

const pool  = new Pool({  
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DBNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
});

function connect() {
  pool.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
  });
}

function disconnect() {
  pool.release(err => {
    console.log('pool has disconnected');
    if (err) {
      console.log('error during disconnection', err.stack);
    }
  });
}

module.exports = { connect, disconnect, pool }