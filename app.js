const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use (express.static('public'));

app.set('view engine', 'pug');


const mainRoutes = require('./routes');


app.use(mainRoutes);



// Error handler for 404's

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// Error handler for everything else or 500

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    next();
});


// launch app on localhost:3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
