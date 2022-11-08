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
    clients.find()
        .then(results => res.send(results))
        .catch(err => res.send(err))
});

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

app.post('/login', async (req, res) => {
    if(!req.body.email || !req.body.password){
        res.send('fill all the fields')
        return
    }

    let user = await clients.find({"email": req.body.email});
    if (user.length == 0) {
        res.send('user not exists ')
        return
    }

    if (user[0].password == req.body.password) {
        req.session.user = user;
        res.send('login ' + JSON.stringify(user));
    }else{
        res.status(500).send("error credential")
    }

});

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.send('logged out')
})

app.post('/signin', async (req, res) => {
    if(!req.body.username || !req.body.email || !req.body.password){
        res.send('fill all the fields')
        return;
    }
    
    let user = await clients.find({"email": req.body.email});
    console.log(user.length);
    if (user.length > 0) {
        res.send('user already exists ' + user)
        return
    }

    const newClient = new clients({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    newClient.save()
        .then(result => {
            req.session.user = result  
            res.send('signIn ' + result.id)
        })
        .catch(err => {res.status(500).send(err)})
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