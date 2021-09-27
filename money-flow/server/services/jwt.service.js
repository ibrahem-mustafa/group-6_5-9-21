const jwt = require('jsonwebtoken')

const jwtKey = 'kjlkgjdf.3473@lsdkjhf'

const SignToken = (data) => jwt.sign(data, jwtKey);

const VerifyToken = (token) => jwt.verify(token, jwtKey);


module.exports = {
    SignToken,
    VerifyToken
}