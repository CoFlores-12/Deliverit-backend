const express = require('express')
const bp      = require('body-parser')
const session = require('express-session')
const cookieP = require("cookie-parser")
const app     = express()
const clients = require('../models/clients')

app.use(bp.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieP())
app.use(session({
    secret: 'IS410',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    clients.find().then(results => res.send(results))
});

//users test
let users = [
    {
        username: 'admin',
        email: 'admin',
        password: 'admin'
    }
]
let categories = [
    {
        name:'Restaurants',
        color:'#ff9e00',
        icon:'/assets/img/iconos/comida-rapida.png'
    },
    {
        name:'Supermarket',
        color:'#691b9a',
        icon:'/assets/img/iconos/tienda.png'
    },
    {
        name:'Drinks',
        color:'#1b9a8f',
        icon:'/assets/img/iconos/coctel.png'
    },
    {
        name:'Health',
        color:'#558b2f',
        icon:'/assets/img/iconos/salud.png'
    },
    {
        name:'Tech',
        color:'#c50b0b',
        icon:'/assets/img/iconos/gadgets.png'
    }
]

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/stores/:indexCategory', (req, res) => {
    res.send(categories[req.params.indexCategory])
})

app.get('/stores/:indexCategory/:indexStore', (req, res) => {
    res.send(categories[req.params.indexCategory])
})

app.post('/login', (req, res) => {
    console.log(req.body);
    if(!req.body.email || !req.body.password){
        res.send('fill all the fields')
        return
    }

    const user = users.find(user => user.email === req.body.email);
    if (!user || user.password !== req.body.password) {
        res.send('invalid credentials')
        return
    }

    req.session.user = user;

    res.send('login ' + JSON.stringify(user));
});

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.send('logged out')
})

app.post('/signin', (req, res) => {
    if(!req.body.username || !req.body.email || !req.body.password){
        res.send('fill all the fields')
        return;
    }
    
    let user = users.find(user => user.email === req.body.email);
    if (user) {
        res.send('user already exists')
        return
    }
    user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    users.push(user)
    req.session.user = user

    res.send('signIn ' + JSON.stringify(user))
})

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

module.exports = app