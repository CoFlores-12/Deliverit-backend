const express = require('express');
const bp      = require('body-parser');
const session = require('express-session');
const app     = express();

app.use(bp.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'IS410',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send('OK');
});

//users test
let users = [
    {
        username: 'admin',
        email: 'admin',
        password: 'admin'
    }
];

app.post('/login', (req, res) => {
    if(!req.body.email || !req.body.password){
        res.send('fill all the fields');
        return;
    }

    const user = users.find(user => user.email === req.body.email);
    if (!user || user.password !== req.body.password) {
        res.send('invalid credentials');
        return;
    }

    req.session.user = user;

    res.send('login ' + JSON.stringify(user));
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('logged out');
});

app.post('/signin', (req, res) => {
    if(!req.body.username || !req.body.email || !req.body.password){
        res.send('fill all the fields');
        return;
    }
    
    let user = users.find(user => user.email === req.body.email);
    if (user) {
        res.send('user already exists');
        return;
    }
    console.log(users);
    user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    users.push(user);
    req.session.user = user;
    console.log(users);

    res.send('signIn ' + JSON.stringify(user));
});

app.get('/categories', (req, res) => {
    res.send('Client categories OK ' + req.session.user);
});


module.exports = app;