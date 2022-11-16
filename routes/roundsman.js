const express    = require('express')
const app        = express()
const bp         = require('body-parser')
const queries    = require('../modules/queries')
const roundsmanSchema = require('../models/roundsman')
const session = require('express-session')
const cookieP = require("cookie-parser")

app.use(bp.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieP())
app.use(session({
    secret: 'IS410',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send('Welcome Roundman');
});

app.post('/register',  async (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.phoneNumber || !req.body.name) {
        res.status(500).send('fields empty')
    }

    const userTMP = await queries.getFromDB(roundsmanSchema, {"email": req.body.email})
    if (userTMP.length != 0) {
        res.status(500).send('user exist')
    }

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


app.get('/orders/:id', (req, res) => {
    res.send('your order is: ' + req.params.id)
});

module.exports = app
