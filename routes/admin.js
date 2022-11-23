const categoriesSchema = require('../models/categories')
const storesSchema    = require('../models/stores')
const clientsSchema = require('../models/clients')
const ordersSchema = require('../models/orders')
const roundsmanSchema = require('../models/roundsman')
const queries    = require('../modules/queries')
const bp       = require('body-parser')
const express =  require('express')
const roundsman = require('../models/roundsman')
const app   = express()


app.use(bp.json())
app.use(express.urlencoded({ extended: true }))


//                                      CLIENTS
app.get('/', (req, res) => {
    res.send('ok')
});
//clients request
app.get('/clients', (req, res) => {
    queries.Read(clientsSchema, {})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
});
app.get('/client/:id', async (req, res) => {
    try {if(!req.params.id){throw new Error("oops")}
    }  catch (error) {
        res.status(400).send('Bad Request')
        return;
    }
    const client = await clientsSchema.find({"_id": req.params.id});
    res.send(client)
});
app.put('/updateClient', async (req, res) => {
    try {
        if(!req.body.username || !req.body.email || !req.body.password || !req.body.idClient){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }

    queries.Update(clientsSchema, {"_id": req.body.idClient}, {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});
app.delete('/deleteClient', (req, res) => {
    try {
        if(!req.body.idClient){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }

    queries.Delete(clientsSchema, {"_id": req.body.idClient})
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});
//clients request end

//                                      STORES
//stores request
app.get('/stores', (req, res) => {
    queries.Read(storesSchema, {})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
});

app.post('/newStore', async (req, res) => {
    try {
        if(!req.body.name || !req.body.logo || !req.body.banner || !req.body.category){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }

    const cat = await categoriesSchema.find({"_id": req.body.category})

    const data = {
        name: req.body.name,
        logo: req.body.logo,
        banner: req.body.banner,
        category: {
            id: cat[0]._id,
            name: cat[0].name
        },
    }

    queries.Create(storesSchema, data)
        .then(result => {
            res.send(result)
        })
        .catch(err => {res.status(500).send(err)})
});

app.put('/updateStore', async (req, res) => {
    try {
        console.log(req.body);
        if(!req.body.name || !req.body.logo || !req.body.banner || !req.body.category || !req.body.idStore){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send("field empty")
    }

    const cat = await categoriesSchema.find({"_id": req.body.category})

    queries.Update(storesSchema, {"_id": req.body.idStore}, {
        name: req.body.name,
        logo: req.body.logo,
        banner: req.body.banner,
        category: {
            id: cat[0]._id,
            name: cat[0].name
        },
    })
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});

app.delete('/deleteStore', (req, res) => {
    try {
        if(!req.body.idStore){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }

    queries.Delete(storesSchema, {"_id": req.body.idStore})
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});
//stores request end

//                                      PRODUCTS
//products request
app.get('/products/:idStore', async (req, res) => {
    try {if(!req.params.idStore){throw new Error("oops")}
    }  catch (error) {
        res.status(400).send('Bad Request')
        return;
    }
    const store = await storesSchema.find({"_id": req.params.idStore});
    res.send(store[0].products)
});

app.post('/newProduct', async (req, res) => {
    try {
        if(!req.body.img || !req.body.price || !req.body.description || !req.body.idStore || !req.body.name){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }

    let store = await storesSchema.find({"_id": req.body.idStore});
    if (store.length === 0) {
        res.status(400).send('Bad Request not store found')
        return
    }

    const data = {
        name: req.body.name,
        img: req.body.img,
        price: req.body.price,
        description: req.body.description,
    }

    store[0].products.push(data)

    queries.Update(storesSchema, {"_id": req.body.idStore}, store[0])
        .then(result => {
            res.send(result)
        })
        .catch(err => {res.status(500).send(err)})
});

app.delete('/deleteProduct', async (req, res) => {
    try {
        if(!req.body.idProduct){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }

    let store = await storesSchema.find({"products._id": req.body.idProduct});
    if (store.length === 0) {
        res.status(400).send('Bad Request not product found')
        return
    }

    let index = 0;
    for (let i = 0; i < store[0].products.length; i++) {
        if (store[0].products[i]["_id"].toString().normalize() === req.body.idProduct){
            index = i;
            break;
        }
    }

    store[0].products.splice(index, 1);

    queries.Update(storesSchema, {"_id": store[0]._id}, store[0])
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})


});

app.put('/updateProduct', async (req, res) => {
    try {
        if(!req.body.idProduct || !req.body.img || !req.body.price || !req.body.description || !req.body.name){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }

    let store = await storesSchema.find({"products._id": req.body.idProduct});
    if (store.length === 0) {
        res.status(400).send('Bad Request not product found')
        return
    }

    for (let i = 0; i < store[0].products.length; i++) {
        if (store[0].products[i]["_id"].toString().normalize() === req.body.idProduct){
            store[0].products[i] = {
                name: req.body.name,
                img: req.body.img,
                price: req.body.price,
                description: req.body.description,
            }
            break;
        }
    }

    queries.Update(storesSchema, {"_id": store[0]._id}, store[0])
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});
//products request end

//                                      CATEGORIES
//categories request
app.get('/categories', (req, res) => {
    queries.Read(categoriesSchema, {})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
});

app.post('/newCategory', async (req, res) => {
    try {
        if(!req.body.name || !req.body.color || !req.body.icon){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }
    let cat = await categoriesSchema.find({"name": req.body.name});
    if (cat.length > 0) {
        res.status(400).send('category already exists ')
        return
    }

    const data = {
        name: req.body.name,
        color: req.body.color,
        icon: req.body.icon
    }

    queries.Create(categoriesSchema, data)
        .then(result => {
            res.send(result)
        })
        .catch(err => {res.status(500).send(err)})
});

app.put('/updateCategory', async (req, res) => {
    try {
        if(!req.body.idCategory || !req.body.name || !req.body.color || !req.body.icon){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }

    let category = await categoriesSchema.find({"_id": req.body.idCategory});
    if (category.length === 0) {
        res.status(400).send('Bad Request not category found')
        return
    }

    category[0] = {
        name: req.body.name,
        color: req.body.color,
        icon: req.body.icon
    }

    queries.Update(categoriesSchema, {"_id": category[0]._id}, category[0])
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});

app.delete('/deleteCategory', (req, res) => {
    try {
        if(!req.body.idCategory){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(400).send('Bad Request')
    }

    queries.Delete(categoriesSchema, {"_id": req.body.idCategory})
        .then(result => {res.send(result)})
        .catch(err => {res.status(500).send(err)})
});
//categories request end

//                                      ORDER
//TODO: CRUD orders
        /* 
        * get's (obtain all), (obtain a specific)
        * get order a client
        * get 
        */
        //assigned order to roundsman


//                                      ROUNDSMAN
//

//Get all the roundsman
app.get('/allTheRoundsman', async (req, res)=>{

    const dealers = await roundsmanSchema.find({})
    res.send(dealers)
})

//get specific dealer
app.get('/roundsman/:idDealer', async (req, res)=>{

    try {
        if(!req.params.id){
            throw new Error("Dealer isn't exists")
        }
    } catch (error) {
        res.status(400).send('Bad Request')
        return;
    }
    const dealer = await roundsmanSchema.find({"_id": req.params.id})
    res.send(dealer)
})

    // activate/desactivate dealer
app.put('/roundsmanStatus', async(req, res)=>{
    try {
        if(!req.body.id){
            throw new Error("Bad Request")
        }
    } catch (error) {
        res.status(400).send('Bad Request')
        return
    }
    const dealer = await roundsmanSchema.find({"_id": req.body.id})
    if(dealer.length==0){
        res.status(400).send('Dealer isnt exists')
    }
    dealer[0].active = !dealer[0].active
    
    
    queries.Update(roundsmanSchema,{"_id":req.body.id},dealer[0])
    .then(result=>{res.send(result)})
    .catch(err=>{res.status(500).send(err)})
})
        // Delete account
app.delete('deleteRoundsman',  (req, res)=>{
    try {
        if(!req.body.id){
            res.status(400)

        }
    } catch (error) {
        res.status(400).send('Error')
    }
})
        // Update info


module.exports = app