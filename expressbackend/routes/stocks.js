const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const result = dotenv.config({ path: '.env.local' })
const { Client } = require('pg')

// error logging for dotenv
if (result.error) {
  console.log(result.parsed)
  throw result.error  
}

// connect to aws postgres db
const client = new Client({  
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DBNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
});

function query() {
  client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
  });

  client.end(err => {
    console.log('client has disconnected')
    if (err) {
      console.log('error during disconnection', err.stack)
    }
  });
}

// search for a stock in db, then use IEX api if info not in there or is old
router.get('/:id', async (req, res) => {  
  console.log(req.params.id);
  const symbol = req.params.id;
  query()

  try { let response = await fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.IEX_PUBLIC_TOKEN}`);
    let jsoned = await response.json();
    
    return res.json(jsoned);
  } catch (err) {
    res.status(500).json({ message: err.message });
  };
});

module.exports = router;