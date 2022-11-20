const express    = require('express')
const app        = express()
const bp         = require('body-parser')
const queries    = require('../modules/queries')
const roundsmanSchema = require('../models/roundsman')
const session = require('express-session')
const cookieP = require("cookie-parser")
const cors =require('cors')


/*
app.use(bp.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieP())
app.use(session({
    secret: 'IS410',
    resave: true,
    saveUninitialized: true
}));
*/
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

app.post('/register',  async (req, res) => {
    
    try {
        if(!req.body.name || !req.body.email || !req.body.password || !req.body.phoneNumber){
            res.status(400).send('Fill all the Fields');
            return;
        }
        
    } catch (error) {
        res.status(400).send('Bad Request')
        
    }
    let user = await roundsmanSchema.find()
    

    const data = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber
    }

    queries.insertInToDB(roundsmanSchema, data)
        .then(result => {
            console.log(result);
            req.session.user = result  
            res.send('success ' + result.name)
        })
        .catch(err => {res.status(500).send(err)})
});

app.post('/login',async(req, res)=>{
    
    try{
        if(!req.body.name || !res.body.password){
            res.status(400).send('Fill all the fields')
            return;
        }
    }catch(error){
        res.status(400).send('Bad Request')
    }

    let user = await roundsmanSchema.find({"username": req.body.name});
    if (user.length==0){
        res.status(400).send('User  is not found')
        return;
    }
    if(user[0].password==req.body.password){
        res.setHeader('Set-Cookie', 'id='+user[0]._id);
        res.send(user[0]);   
    }else{
        res.status(400).send("error credentials")
    }
})
//TODO: get orders in my name in progress
//TODO: get orders availables
//TODO: get history orders delivered
//TODO: get info a order specific
//TODO: change status order taked 
//TODO: change status order delivered

app.get('/orders/:id', async (req, res) => {
    res.send('your order is: ' + req.params.id)
});

module.exports = app
