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
    res.render('about', {projects} );
})

// Project Pages
router.get('/project/:id', (req, res) => {
    const {id} = req.params;
    const project = projects[id];

    if(project) {
        res.render('project', {project} );
    } else {
        res.redirect('/');
    }
    
})



module.exports = router;