const branchesRoutes = require('./swift/branches.routes')
const transactionsRoutes = require('./swift/transactions.routes')
const router = require('express').Router();


// /swift/branches
router.use('/branches', branchesRoutes)

// /swift/transactions
router.use('/transactions', transactionsRoutes)


module.exports = router;