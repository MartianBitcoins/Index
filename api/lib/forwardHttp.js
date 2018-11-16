const request = require('request')
const logger = require('./logger')
const expressAsyncHandler = require('express-async-handler')

/** Creates a express.js middleware that forward GET calls to a route **/
module.exports = function forwardHttpFactory({ baseUrl }) {

  async function forwardHttp(req, res, next) {

    if (req.method !== 'GET') {
      next()
      return
    }

    const options = {
      baseUrl,
      url: req.path, // TODO: or url?
      method: 'GET',
      qs: req.query,
    }

    logger.debug('[forwardHttp.js] request options', options)

    request(options)
    .on('error', (e) => {
      // if (['ENOTFOUND', 'ECONNREFUSED'].indexOf(err.code) !== -1) {
      //   self.res.statusCode = 404;
      //   self.res.end();
      // }

      logger.error('[Error - forwardHttp.js] error forwarding to render server', e.message, e.stack)
      throw e
    })
    .pipe(res)


    // let stream
    // try {
    //   stream = await axios({
    //     method: 'get',
    //     url,
    //     responseType:'stream'
    //   });
    // } catch (e) {
    //
    //   // Codes outside 2xx
    //   if (e.response) {
    //     ctx.response.status = e.response.status
    //     ctx.response.body = e.respose
    //     return
    //   }
    //
    //   logger.error('[Error - fordwardHttp.js] error streaming GET to render server', e.message, e.stack)
    //   ctx.response.status = 500
    //   ctx.response.body = 'INTERNAL_ERROR'
    //   return
    // }
    //
    // console.log('stream', stream)
    //
    // // TODO: type?
    // ctx.response.body = stream.data;
  }

  return expressAsyncHandler(forwardHttp)
}
