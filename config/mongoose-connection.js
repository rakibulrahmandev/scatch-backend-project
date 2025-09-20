// require mongoose ------------------------------------------------->
const mongoose = require('mongoose');
const config = require('config');

// mongoose connect DB ---------------------------------------------->
mongoose.connect(`${config.get("MONGODB_URI")}/scatchDB`)
.then(() => {
    console.log('Database connected!');
})
.catch((err) => {
    console.log(err);
});

// export mongoose connection --------------------------------------->
module.exports = mongoose.connection;