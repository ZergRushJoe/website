/**
 * Created by jkarp on 5/25/2017.
 */

const express = require('express');
const app = express();
const path = require('path');

//settings
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', function (req, res)
{
    res.render('body');
});

app.listen(80);