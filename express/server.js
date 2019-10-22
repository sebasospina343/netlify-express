'use strict'
const express = require('express')
const path = require('path')
const serverless = require('serverless-http')
const app = express()
const bodyParser = require('body-parser')

const router = express.Router()
router.get('/', (req, res) => {
  res.json([
    {
      customerId: '59767559181262060060278870901087098211',
      email: 'pifdemo31@putitforward.com',
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      customerId: '60767559181262060060278870901087098223',
      email: 'pifdemo32@putitforward.com',
      firstName: 'Sandra',
      lastName: 'Jones'
    },
    {
      customerId: '10767559181262060060278870901087098234',
      email: 'pifdemo33@putitforward.com',
      firstName: 'Rebecca',
      lastName: 'Thomson'
    },
    {
      customerId: '72767559181262060060278870901087098245',
      email: 'pifdemo34@putitforward.com',
      firstName: 'Johannes',
      lastName: 'Deckers'
    },
    {
      customerId: '30767559181262060060278870901087098256',
      email: 'pifdemo35@putitforward.com',
      firstName: 'Milton',
      lastName: 'Houst'
    },
    {
      customerId: '40767559181262060060278870901087098267',
      email: 'pifdemo36@putitforward.com',
      firstName: 'Oscar',
      lastName: 'Mendel'
    }
  ])
})
router.get('/another', (req, res) => res.json({ route: req.originalUrl }))
router.post('/', (req, res) => res.json({ postBody: req.body }))

app.use(bodyParser.json())
app.use('/.netlify/functions/server', router) // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))

module.exports = app
module.exports.handler = serverless(app)
