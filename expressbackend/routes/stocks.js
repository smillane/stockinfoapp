const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const result = dotenv.config({ path: '.env.local' })
const { connect, disconnect } = require('../database/connection-handling')

// error logging for dotenv
if (result.error) {
  console.log(result.parsed)
  throw result.error  
}

// search for a stock in db, then use IEX api if info not in there or is old
router.get('/:id', async (req, res) => {  
  console.log(req.params.id);
  const symbol = req.params.id;
  try { let response = await fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.IEX_PUBLIC_TOKEN}`);
    let jsoned = await response.json();
    
    return res.json(jsoned);
  } catch (err) {
    res.status(500).json({ message: err.message });
  };
});

module.exports = router;