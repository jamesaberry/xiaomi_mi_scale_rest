require('dotenv/config')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Import Routes
const miscaleRoute = require('./routes/miscale');
const postRoute = require('./routes/posts');
app.use('/miscale', miscaleRoute);
app.use('/posts', postRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => console.log('connected to db')
);
app.listen(3000);