const express = require('express');
const app     = express();
const client  = require('./routes/client');

app.set('port', 3000);

app.use('/client', client);

app.listen(app.get('port'));