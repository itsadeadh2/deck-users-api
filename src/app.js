const express = require('express');
const cors = require('cors');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const options = {
  swaggerUi: path.join(__dirname, '/swagger.json')
}

const spec = fs.readFileSync(path.join(__dirname, '../swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  app.use(middleware.swaggerUi())
});

const app = express();

app.use(cors());

require('./startup/routes')(app);

module.exports = app;