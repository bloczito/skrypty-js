const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const indexRouter = require('./routes/index');
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');


const app = express();


const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
    origin: '*'
    // origin: function(origin, callback){
    //
    //     console.log("origin: ", origin)
    //     if(!origin) return callback(null, true);
    //
    //     if(allowedOrigins.indexOf(origin) === -1){
    //         const msg = 'The CORS policy for this site does not ' +
    //             'allow access from the specified Origin.';
    //         return callback(new Error(msg), false);
    //     }
    //     return callback(null, true);
    // }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

// app.set('port', PORT);
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })

module.exports = app;
