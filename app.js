// require modules ------------------------------------------------->
const express = require('express');
const cookieparser = require('cookie-parser');
const path = require('path');

const ownersRoute = require('./routes/ownersRoute');
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productRoute');

// create express app ---------------------------------------------->
const app = express();

// use app --------------------------------------------------------->
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieparser());

// set template engine --------------------------------------------->
app.set('view engine', 'ejs');

// create route ---------------------------------------------------->
app.use('/owners', ownersRoute);
app.use('/users', usersRoute);
app.use('/products', productsRoute);

// start server ---------------------------------------------------->
app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});