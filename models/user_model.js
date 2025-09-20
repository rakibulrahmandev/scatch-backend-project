// require mongoose ------------------------------------------------->
const mongoose = require('mongoose');

// create user schema ----------------------------------------------->
const userSchema = mongoose.Schema({
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

// exports user model ----------------------------------------------->
module.exports = mongoose.model('user', userSchema);