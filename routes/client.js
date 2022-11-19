const express = require('express')
const bp      = require('body-parser')
const session = require('express-session')
const cookieP = require("cookie-parser")
const app     = express()
const cors       = require('cors')
const clientsSchema = require('../models/clients')
const ordersSchema  = require('../models/orders')
const queries = require('../modules/queries')
var ID = require("nodejs-unique-numeric-id-generator")


app.use(
    cors({
      credentials: true,
      origin: true,
    }),
  );
  app.use(session({
    secret: 'IS410',
    saveUninitialized: true,
    resave:false,
    secure: false,
    cookie:{
        secure: false,
        httpOnly: false
    }
}))

app.use(bp.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieP())


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
            res.send(req.session.user)
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
        res.send(req.session.user);
    }else{
        res.status(500).send("error credential")
    }

});
app.get('/logout', (req, res) => {
    req.session.destroy()
    res.send('logged out')
})

//TODO: Auth APIs
app.get('/test', (req, res) => {
    res.send(req.cookies.id)
});

app.get('/orders', async (req, res) => {
    const orders = await ordersSchema.find({"client._id": req.cookies.id});
    res.send(JSON.stringify(orders))
});

app.get('/orders/:idOrder', async (req, res) => {
    const orders = await ordersSchema.find({"_id": req.params.idOrder});
    res.send(JSON.stringify(orders))
});

app.post('/CreateOrder', async (req, res) => {
    console.log(req.cookies.id);
    const user = await clientsSchema.find({"_id": req.cookies.id});
    const data = {
        id: ID.generate(new Date().toJSON()),
        status:  'Received',
        service: req.body.service,
        total: req.body.total,
        date: req.body.date,
        payment: req.body.payment,
        client:    {
            id: user._id,
            name: user.username,
            email: user.email
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
    queries.insertInToDB(ordersSchema, data)
    res.send(JSON.stringify(data));
});

module.exports = app