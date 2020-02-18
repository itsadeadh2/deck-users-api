const mongoose = require('mongoose');
const { DB_CONNECTION } = require('../../bin/variables');

module.exports = () => {  
  mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log(`Connected to ${DB_CONNECTION}! `));
};