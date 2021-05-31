const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const dotenv = require('dotenv')
const result = dotenv.config({ path: '.env.local' })

// error logging for dotenv
if (result.error) {
  console.log(result.parsed)
  throw result.error  
}

//test query and mapping data from api
router.get('/', async (req, res) => { 
  try { let response = await fetch(`https://sandbox.iexapis.com/stable/stock/aapl/quote?token=${process.env.IEX_PUBLIC_TOKEN}`);
    let jsoned = await response.json();
    console.log(jsoned)
    return res.json(jsoned)
  } catch (err) {
    res.status(500).json({ message: err.message });
  };
});

module.exports = router;