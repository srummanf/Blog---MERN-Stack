require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const connectDB = require('./server/config/db.js');

const app =  express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //allpws to use form values

// Connect to MongoDB
connectDB();

app.use(express.static('public'));

// Templating engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'))
app.use('/', require('./server/routes/admin'))

app.listen(port,(req, res) => {
    console.log(`Server is running on port ${port}`);
});
