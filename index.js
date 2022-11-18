const express  = require('express');
const app      = express();
const client   = require('./routes/client');
const home     = require('./routes/home');
const database = require('./modules/database');
const roundsman = require('./models/roundsman');
const admin = require('./routes/admin')
//config
app.set('port', 3000);

//static files server
app.use(express.static(__dirname));

//routes
app.use('/', home);
app.use('/client', client);
app.use('/admin',admin)
app.use('/roundsman', roundsman);

//TODO: create new model for delivery man
//TODO: create new model for orders

//start server
app.listen(app.get('port'), () => {
    console.log("server in port:", app.get('port'));
    console.log("connecting to database...");
});