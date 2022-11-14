const express = require('express')
const bp      = require('body-parser')
const session = require('express-session')
const cookieP = require("cookie-parser")
const app     = express()
const clientsSchema = require('../models/clients')
const ordersSchema  = require('../models/orders')
//const dealersSchema  = require('../models/dealers')
const queries = require('../modules/queries')

app.use(bp.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieP())
app.use(session({
    secret: 'IS410',
    resave: true,
    saveUninitialized: true
}))

//TODO: remove this route
app.get('/', (req, res) => {
    queries.getFromDB(clientsSchema, {})
        .then(results => res.send(results))
        .catch(err => res.status(500).send(err))
});

app.post('/signin', async (req, res) => {
    if(!req.body.username || !req.body.email || !req.body.password){
        res.send('fill all the fields')
        return;
    }
    
    let user = await clientsSchema.find({"email": req.body.email});
    if (user.length > 0) {
        res.send('user already exists ')
        return
    }

    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    queries.insertInToDB(clientsSchema, data)
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

    let user = await clientsSchema.find({"email": req.body.email});
    if (user.length == 0) {
        res.status(500).send('user not exists ')
        return
    }

    if (user[0].password == req.body.password) {
        req.session.user = user[0];
        res.send('login ' + req.session.user.username);
    }else{
        res.status(500).send("error credential")
    }

});
app.get('/logout', (req, res) => {
    req.session.destroy()
    res.send('logged out')
})

//TODO: Auth APIs

app.get('/orders', async (req, res) => {
    const orders = await ordersSchema.find({"client.id": req.session.user._id});
    res.send(JSON.stringify(orders))
});

app.get('/orders/:idOrder', async (req, res) => {
    const orders = await ordersSchema.find({"_id": req.params.idOrder});
    res.send(JSON.stringify(orders))
});

app.post('/CreateOrder', (req, res) => {
    const data = {
        status:  'Received',
        service: req.body.service,
        total: req.body.total,
        date: req.body.date,
        client:    {
            id: req.session.user._id,
            name: req.session.user.username,
            email: req.session.user.email
        },
        dealer:     {
            id: null,
            name: null,
            email: null,
            tel: null
        },
        products:  req.body.products,
        locations: req.body.locations
    }
    res.send(JSON.stringify(data));
    queries.insertInToDB(ordersSchema, data)
});

module.exports = app