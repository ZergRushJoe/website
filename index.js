/**
 * Created by jkarp on 5/25/2017.
 */

const express = require('express');
const app = express();
const path = require('path');

//settings
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res,next)
{

});

app.use(function(err,req,res,next)
{
    if(err)
    {
        res.send('server error');
    }
    res.send('object not found');
});
app.listen(80);