// require mongoose ------------------------------------------------->
const mongoose = require('mongoose');

// create owner schema ---------------------------------------------->
const ownerSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    profile: String,
    gstin: String
});

// exports owner model ---------------------------------------------->
module.exports = mongoose.model('owner', ownerSchema);