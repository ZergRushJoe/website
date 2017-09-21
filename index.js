/**
 * Created by jkarp on 5/25/2017.
 */

const express = require('express');
const app = express();
const path = require('path');

//settings
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'/pug'));
app.get('/', function (req, res,next)
{
    res.render('index.pug');
});

app.use(function(err,req,res,next)
{
    if(err)
    {
        res.send('server error');
        console.log(err.toString());
        return;
    }
    res.send('object not found');
    return;
});
app.listen(80);