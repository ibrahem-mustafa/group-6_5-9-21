const {VerifyToken} = require('../services/jwt.service');

const ValidateToken = (req, res, next) => {

    const authorization = req.headers.authorization;

    if (!authorization) return res.status(401).json({
        msg: "Missing User Token"
    })

    try {
        const token = authorization.split(' ')[1]
        const user = VerifyToken(token);
        req.user = user;
        next();
    } catch(err) {
        res.status(401).json({
            msg: 'Invalid Token'
        })
    }
    
}

module.exports = {
    ValidateToken
}