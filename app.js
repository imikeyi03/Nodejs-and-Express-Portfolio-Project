const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use (express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes/index');
app.use(mainRoutes);



// Error handler for 404's

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});


// // Global Error Handler
app.use((err, req, res, next) => {
    if(err.status === 404) {
        res.status(404)
        res.render('page-not-found');
    } else {
        err.status = 500 || err.status;
        res.status(500);
        const errorMessage = `Oh no! Looks like a ${err.status} has occured!`;
        res.render('error', {errorMessage});
    }
});



// launch app on localhost:3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
