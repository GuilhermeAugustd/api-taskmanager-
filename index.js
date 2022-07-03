//libs
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

//files
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

let port = 3003
app.listen(port, () => {
  console.log('Api started at ' + port)
})
