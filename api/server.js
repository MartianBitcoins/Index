const http = require('http')
const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')
require('./lib/mongoose')

const pingRoutes   = require('./routes/api/ping')
const homeRoute    = require('./routes/home')
const healthRoute  = require('./routes/health')
const coinsGET = require('./routes/api/coins/get')
const coinsGETSchema = require('./routes/api/coins/getSchema')
const coinsPOST = require('./routes/api/coins/post')
const createCoinSchema = require('./routes/api/coins/postSchema')
const coinsDELETE = require('./routes/api/coins/delete')
const deleteCoinSchema = require('./routes/api/coins/deleteSchema')
// const coinsPOSTSchema = require('./routes/api/coins/postSchema')
// const getCoinsPage = require('./routes/coins')
// const getByIdCoinsPage = require('./routes/coins/details')
// const coinsDetailsRoute = require('./routes/coins/details')

const { api: { port: apiPort }, render: { host: renderHost, port: renderPort }} = require('./config')
const internalErrorMiddleware = require('./middleware/internal-error')
const parameterValidatorMiddleware = require('./middleware/parameter-validator')
const logger = require('./lib/logger')
const forwardGet = require('./lib/forwardHttp')

console.log('Starting ss-api 🔥😎🔥 ...')

const app = express()

app.use(bodyParser.json())
app.set('x-powered-by', false)
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization')
  next()
})
// API
router.post('/api/ping', pingRoutes.ping)
router.get('/api/coins', coinsGETSchema, coinsGET)
router.post('/api/coins', createCoinSchema, coinsPOST)
router.delete('/api/coins/:id', deleteCoinSchema, coinsDELETE)

// Web APP routes
router.get('/', homeRoute)
router.get('/health', healthRoute)
// router.get('/coins', getCoinsPage)
// router.get('/coins/:id', getByIdCoinsPage)
// app.use('/v1/api/coins', coinsAPI)

// Static files
// Redirect the rest of the GET calls to the render server (serve static files)
// V2: This will be handled by an http server in front of the API
router.get(
  '/*',
  forwardGet({ baseUrl: `http://${renderHost}:${renderPort}` })
)

app.use(router)
app.use(parameterValidatorMiddleware())
app.use(internalErrorMiddleware())

const server = http.createServer(app)

const startServer = async function () {

  await new Promise((resolve, reject) => {
    app.listen(apiPort, '0.0.0.0', err => {
      if (err) {
        reject(err)
        return
      }
      logger.info('==> 🌎 Listening on port %s', apiPort)
      resolve()
    })
  })

  process.emit('listening')
}

startServer()
  .catch((err) => {
    logger.error('[app] listening', err.message, err.stack)
    process.exit(1)
  })

module.exports = server