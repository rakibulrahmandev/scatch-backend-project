// require mongoose ------------------------------------------------->
const mongoose = require('mongoose');

// create product schema -------------------------------------------->
const productSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    profile: String
});

// exports product model ------------------------------------------->
module.exports = mongoose.model('product', productSchema);