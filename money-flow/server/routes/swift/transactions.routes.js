const { ValidateToken } = require("../../middlewares/validate-token.middleware");
const { Transaction } = require("../../models/transaction.model");
const { User } = require("../../models/user.model");

const router = require("express").Router();

// list transactions
router.get('/fullTransactions', ValidateToken, async (req, res) => {

    const transactions = await Transaction.find({
        'createdBy.id': req.user.id
    });

    res.status(200).json({transactions})
})

// create transaction
router.post('/createTransaction', ValidateToken, async (req, res) => {

    const {
        fromId,
        toId,
        type,
        amount,
        note
    } = req.body

    const user = await User.findById(req.user.id);

    if (!user) return res.status(400).json({
        msg: 'User Not Found'
    })
    const branches = user.branches;


    const fromBranch = branches.find(b => b._id == fromId);
    if (!fromBranch) return res.status(404).json({
        msg: 'From Branch Dose Not Exist'
    })

    let toBranch;
    if (type != 'transfer') {
        toBranch = fromBranch
    } else {
        toBranch = branches.find(b => b._id == toId);
        if (!toBranch) return res.status(404).json({
          msg: "To Branch Dose Not Exist",
        }); 
    }


    const amountSign = type == 'income' ? 1 : -1
    const signedAmount = amount * amountSign;

    // Balance: 1000
    // Type: income
    // amount: 500
    // SignedAmount: +500
    // balance += 500 = 1000 + 500 = 1500

    // Balance: 1000
    // Type: expense
    // amount: 500
    // SignedAmount: -500
    // balance += -500 = 1000 + (-500) = 1000 - 500 = 500

    // Balance: 1000
    // Type: transfer
    // amount: 500
    // SignedAmount: -500
    // balance += -500 = 1000 + (-500) = 1000 - 500 = 500
    
    fromBranch.balance += signedAmount;

    if (type == 'transfer') {
        toBranch.balance += amount;
    } 

    const transaction = new Transaction({
        from: {
            id: fromBranch._id,
            name: fromBranch.name,
        },
        to: {
            id: toBranch._id,
            name: toBranch.name,
        },
        type,
        amount,
        note,
        createdBy: {
            id: req.user.id,
            name: req.user.name
        }
    })

    await transaction.save();
    await user.save()

    res.status(201).json({
        transaction
    })
})

// delete transaction

module.exports = router;
