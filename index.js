var express = require('express')
var helmet = require('helmet')
var app = express();
var path = require('path');
var userRouter = require('./Routers/UserRouter');
var groupRouter = require('./Routers/GroupRouter')
var bodyParser = require('body-parser')
const bodyParserJson = bodyParser.json; 
// var PORT = process.env.PORT || 8080

app.use(helmet());
app.use(bodyParserJson());
app.use('/users', userRouter);
app.use('/groups', groupRouter);

app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname + '/index.html'))
})

// Database
require('./config/db.js');

app.listen(3000);