const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;





// GET Routes


// Index
router.get('/', (req, res) => {
    res.render('index', {projects} );
})

// About page
router.get('/about', (req, res) => {
    res.render('about');
})







module.exports = router;