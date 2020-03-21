const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
    first_name: {
        type:String,
        required:true
    },
    last_name: {
        type : String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    state: {
        type: String,
        required:true
    }
});

const Contacts = module.exports = mongoose.model('Contacts',contactsSchema);