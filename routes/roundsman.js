const express    = require('express')
const app        = express()
const bp         = require('body-parser')
const queries    = require('../modules/queries')
const roundsmanSchema = require('../models/roundsman')
const session = require('express-session')
const cookieP = require("cookie-parser")
const cors =require('cors')
const orders = require('../models/orders')
const ordersSchema = require('../models/orders')

app.use(bp.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieP());

app.use(
    cors({
      credentials: true,
      origin: true,
    }),
  );

app.post('/register',  async (req, res) => {
    
    try {
        if(!req.body.name || !req.body.email || !req.body.password || !req.body.phoneNumber){
            res.status(400).send('Fill all the Fields');
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
        return
    }
    let user = await roundsmanSchema.find({
        "$or":[
                {"email":req.body.email},
                {"phoneNumber": req.body.phoneNumber}
    ]});
    if (user.length>0){
        res.status(400).send('User already exists')
        return;
    }
    const data = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber
    }

    queries.Create(roundsmanSchema, data)
        .then(result => {
            res.send(result)
        })
        .catch(err => {res.status(500).send(err)})
});

app.post('/login', async(req, res)=>{
    
    try{
        if(!req.body.phoneNumber || !req.body.password){
            res.status(400).send('Fill all the fields')
            return;
        }
    }catch(error){
        res.status(400).send('Bad Request')
    }

    let user = await roundsmanSchema.find({"phoneNumber": req.body.phoneNumber});
    if (user.length==0){
        res.status(400).send('User  is not found')
        return;
    }
    if(user[0].password==req.body.password){
        res.setHeader('Set-Cookie', 'idRoundsman='+user[0]._id);
        res.send(user[0]);   
    }else{
        res.status(400).send("error credentials")
    }
})
// get orders in my name in progress
app.get('/ordersName/:idRoundsman', async (req, res)=>{
    try {
        if(!req.params.idRoundsman){
            throw new Error("user not logger")
        }
    } catch (error) {
        res.status(400).send('user not logger');
        return;
    }
    
    const orders = await ordersSchema.find({
        $and: [
            {"dealer.id": req.params.idRoundsman},
            { $or: [
                {"status": "Preparing"},
                {"status": "OnTheWay"}
            ]}
        ]
    });

    res.send(orders);
})
// get orders availables
app.get('/ordersAvailables', async (req, res)=>{
    const orders = await ordersSchema.find({"status": "Received"})
    res.send(orders);
})
// get history orders delivered
app.get('/ordersCompleted/:idRoundsman', async (req, res)=>{
    try {
        if(!req.params.idRoundsman ){
            throw new Error("You don't have  orders")
        }
    } catch (error) {
        res.status(400).send('Bad Request');
        return;
    }
    const orders = await ordersSchema.find({"dealer.id": req.params.idRoundsman,"status": "Delivered"});
    res.send(orders);
})
// get info a order specific
app.get('/getOrderInfo/:idOrder', async (req, res)=>{
    try {
        if(!req.params.idOrder ){
            throw new Error("Order isn't exists")
        }
    } catch (error) {
        res.status(400).send('Bad Request');
        return;
    }
    const orders = await ordersSchema.find({"id": req.params.idOrder})
    res.send(orders[0]);
})
//change status order take
app.put('/takedOrder/:idOrder', async (req, res) => {
    try {
        if(!req.params.idOrder || !req.body.id){
            throw new Error("Order isn't exists")
        }
    } catch (error) {
        res.status(400).send('Bad Request');
        return;
    }
    const order = await ordersSchema.find({"id": req.params.idOrder})

    if (order[0].status != 'Received') {
        res.status(400).send("bad request")
        return
    } 

    const dealer = await roundsmanSchema.find({"_id": req.body.id})

    order[0].status = "Preparing"
    order[0].dealer.id = dealer[0]._id
    order[0].dealer.name = dealer[0].name
    order[0].dealer.email = dealer[0].email
    order[0].dealer.tel = dealer[0].phoneNumber

    queries.Update(ordersSchema, {"id": req.params.idOrder}, order[0])
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});
//change status order OnTheWay
app.put('/OrderOnTheWay/:idOrder', async (req, res) => {
    try {
        if(!req.params.idOrder){
            throw new Error("Order isn't exists")
        }
    } catch (error) {
        res.status(400).send('Bad Request');
        return;
    }
    const order = await ordersSchema.find({"id": req.params.idOrder})

    if (order[0].status != 'Preparing') {
        res.status(400).send("bad request")
        return
    }

    order[0].status = "OnTheWay"

    queries.Update(ordersSchema, {"id": req.params.idOrder}, order[0])
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});

//change status order delivered
app.put('/markDeliveredOrder/:idOrder', async (req, res) => {
    try {
        if(!req.params.idOrder){
            throw new Error("Order isn't exists")
        }
    } catch (error) {
        res.status(400).send('Bad Request');
        return;
    }
    const order = await ordersSchema.find({"id": req.params.idOrder})

    if (order[0].status != 'OnTheWay') {
        res.status(400).send("bad request")
        return
    }

    order[0].status = "Delivered"

    queries.Update(ordersSchema, {"id": req.params.idOrder}, order[0])
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});


module.exports = app