const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let historySchema = new Schema({
    listId : {
        type: String,
        default: "",
    },

    historyId : {
        type: String,
        default: "",
        unique: true,
        index: true
    },

    itemDetails : [],

    createdOn : {
        type : Date,
        default : ''
    }
})

module.exports = mongoose.model('History', historySchema)