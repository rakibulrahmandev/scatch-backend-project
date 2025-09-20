// require modules ------------------------------------------------->
const express = require('express');
const cookieparser = require('cookie-parser');
const path = require('path');

// create express app ---------------------------------------------->
const app = express();

// use app --------------------------------------------------------->
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieparser());

// set template engine --------------------------------------------->
app.set('view engine', 'ejs');

// create default route -------------------------------------------->
app.get('/', (req, res) => {
    res.send('hello');
});

// start server ---------------------------------------------------->
app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});