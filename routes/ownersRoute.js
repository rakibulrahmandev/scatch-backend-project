// require modules ------------------------------------------------->
const express = require('express');

// route ----------------------------------------------------------->
const router = express.Router();

// create route ---------------------------------------------------->
router.get('/', (req, res) => {
    res.send('hey! from owners route');
});

// exports route --------------------------------------------------->
module.exports = router;