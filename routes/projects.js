const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

const projectId = projects.id;


// Note: look at the app.js file with a parameter to the projects route. By placing '/' in this get request, I wont have to type /projects/projects or somethings
// similar to render the testpage.pug file :)
router.get('/', (req, res) => {
    res.render('testpage', projectId);
})


module.exports = router;