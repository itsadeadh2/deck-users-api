const express = require('express');
const cors = require('cors');


const app = express();


app.use(cors());

require('./startup/swagger')(app);

require('./startup/routes')(app);

require('./startup/database')();

module.exports = app;