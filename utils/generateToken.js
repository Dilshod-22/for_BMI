const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  return jwt.sign({ id }, 'dabba', {
    expiresIn: '30d',
  })
}


module.exports = generateToken
