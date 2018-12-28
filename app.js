const express = require('express')
const app = express()
const config = require('./config/env.json')[process.env.NODE_ENV || 'development']
console.log(config)
app.listen(config.PORT)