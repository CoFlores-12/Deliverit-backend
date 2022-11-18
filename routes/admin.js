//TODO:
const express    =  require('express')
const app        = express()
const categories = require('../models/categories')
const stores     = require('../models/stores')
const queries    = require('../modules/queries')


module.exports = app