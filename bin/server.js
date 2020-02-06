const variables = require('./variables');
const http = require('http');


const app = require('../src/app');

const port = variables.port || 3000;
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const server = http.createServer(app).listen(port, () => {
    console.log(`API Running on port ${port}`);
});

module.exports = server;