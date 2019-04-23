const { isCelebrate } = require('celebrate')

module.exports = function validatorFormatterFabric() {
  return function validatorFormatter(err, req, res, next) {
    if (isCelebrate(err)) {
      const formatedMessage = err.details.reduce(
        (acc, item) => {
          acc[item.path] = item.message
          return acc
        }, {}
      )
      formatedMessage.tag = 'PARAMETER_VALIDATION_ERROR'
      res.status(400).send(formatedMessage)
      return
    }
    next(err)
  }
}