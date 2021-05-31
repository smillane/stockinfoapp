const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {  
  res.send('login page');
});

router.get('/register', (req, res) => {  
  res.send('register page');
});

module.exports = router;