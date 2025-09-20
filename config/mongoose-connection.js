// require mongoose ------------------------------------------------->
const mongoose = require('mongoose');

// mongoose connect DB ---------------------------------------------->
mongoose.connect('mongodb://localhost:27017/scatchDB')
.then(() => {
    console.log('Database connected!');
})
.catch((err) => {
    console.log(err);
});

// export mongoose connection --------------------------------------->
module.exports = mongoose.connection;