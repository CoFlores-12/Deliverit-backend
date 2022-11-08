const express = require('express')
const bp      = require('body-parser')
const session = require('express-session')
const cookieP = require("cookie-parser")
const app     = express()
const clients = require('../models/clients')
const queries = require('../modules/queries')

app.use(bp.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieP())
app.use(session({
    secret: 'IS410',
    resave: true,
    saveUninitialized: true
}));

//TODO: remove this route
app.get('/', (req, res) => {
    queries.getFromDB(clients, {})
        .then(results => res.send(results))
        .catch(err => res.status(500).send(err))
});

app.post('/signin', async (req, res) => {
    if(!req.body.username || !req.body.email || !req.body.password){
        res.send('fill all the fields')
        return;
    }
    
    let user = await clients.find({"email": req.body.email});
    if (user.length > 0) {
        res.send('user already exists ')
        return
    }

    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    queries.insertInToDB(clients, data)
        .then(result => {
            req.session.user = result  
            res.send('signIn ' + result.id)
        })
        .catch(err => {res.status(500).send(err)})
})
app.post('/login', async (req, res) => {
    if(!req.body.email || !req.body.password){
        res.status(500).send('fill all the fields')
        return
    }

    let user = await clients.find({"email": req.body.email});
    if (user.length == 0) {
        res.status(500).send('user not exists ')
        return
    }

    if (user[0].password == req.body.password) {
        req.session.user = user;
        res.send('login ' + user.username);
    }else{
        res.status(500).send("error credential")
    }

});
app.get('/logout', (req, res) => {
    req.session.destroy()
    res.send('logged out')
})

//TODO: Auth APIs

app.get('/history', (req, res) => {
    const session = req.session
    try {
        session.user.username;
    } catch (error) {
        res.status(500).send('User no logger')
        return
    }
    res.send(session.user.username);
})

//TODO: info order

//TODO: create new order

module.exports = app