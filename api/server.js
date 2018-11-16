const http = require('http')
const express = require('express')
const router = express.Router()
require('./lib/mongoose')

const pingRoutes = require('./routes/ping')
const homeRoutes = require('./routes/home')

const { api: { port: apiPort }, render: { host: renderHost, port: renderPort }} = require('./config')
const internalErrorMiddleware = require('./middleware/internal-error')
const logger = require('./lib/logger')
const forwardGet = require('./lib/forwardHttp')

console.log('Starting ss-api 🔥😎🔥 ...')

const app = express()

app.set('x-powered-by', false)

// Test ping route
router.get('/ping', pingRoutes.ping)

// Web APP routes
router.get('/', homeRoutes.home)

// Static files
// Redirect the rest of the GET calls to the render server (serve static files)
// V2: This will be handled by an http server in front of the API
router.get(
  '/*',
  forwardGet({ baseUrl: `http://${renderHost}:${renderPort}` })
)

app.use(router)
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