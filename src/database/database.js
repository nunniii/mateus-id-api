const mongoose = require('mongoose')
const dataSchema = require('../models/user')
require('dotenv').config()


// connect to mongodb
const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));




const Data = mongoose.model('user', dataSchema);
console.log(Data)



module.exports = Data;
