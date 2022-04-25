const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    email: {
        type: String,
        required: true
    }, 
    educational_institution: {
        type: String,
        required: true
    },
    rawHeaders: {
        type: String
    }
}, { timestamps: true })


module.exports = dataSchema;
