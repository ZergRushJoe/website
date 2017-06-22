/**
 * Created by jkarp on 5/25/2017.
 */

const express = require('express');
const app = express();
const path = require('path');

//settings
app.use('/public', express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD


app.get('/', function (req, res,next)
=======
app.get('/', function (req, res)
>>>>>>> 77a2f22f3100d7e58b1c6073c47530149038ddb4
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