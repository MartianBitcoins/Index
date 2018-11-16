/**
 * Gets a value and if the value if falsy throws an error
 */
function getAssert(val) {
  if (!val) {
    throw new Error('Value should exists');
  }
  return val;
}

function getEnv(name, parse) {
  if (!name){
    throw new Error('Name should be defined in getEnv')
  }

  let val = process.env[name]

  if (!val) {
    throw new Error(`Value ${name} should exist`)
  }

  if (parse === 'bool') {
    if (val === 'true') {
      val = true
    } else if (val === 'false') {
      val = false
    } else {
      throw new Error(`Value ${val} in getEnv is not boolean parseable`)
    }
  }

  if (parse === 'int') {
    if (filterInt(val)) {
      val = Number(val)
    } else {
      throw new Error(`Value ${val} in getEnv is not int parseable`)
    }
  }

  return val
}

module.exports = { getAssert, getEnv }
