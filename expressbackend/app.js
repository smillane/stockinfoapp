const express = require('express');
const app = express();
const port = 8000;

// Routes
app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));
app.use('/users', require('./routes/users'));
app.use('/stocks', require('./routes/stocks'));
app.use('/InsiderTrading', require('./routes/InsiderTrading'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

