const express  = require('express');
const app      = express();
const client   = require('./routes/client');
const database = require('./modules/database')

//config
app.set('port', 3000);

//static files server
app.use(express.static(__dirname));

//routes
app.use('/client', client);

//start server
app.listen(app.get('port'), () => {
    console.log("server in port:", 3000);
    console.log("connecting to database...");
});