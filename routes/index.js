const express = require('express');
const router = express.Router();


// GET Routes

// Index
router.get('/', (req, res) => {
    res.render('index');
})

// About page
router.get('/about', (req, res) => {
    res.render('about');
})







module.exports = router;