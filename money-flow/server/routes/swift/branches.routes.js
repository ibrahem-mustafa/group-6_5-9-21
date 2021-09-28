const {ValidateToken} = require('../../middlewares/validate-token.middleware')
const {User} = require('../../models/user.model');

const router = require('express').Router()


// List Branches
router.get('/fullBranchList', ValidateToken, async (req, res) => {

    const user = await User.findById(req.user.id)

    if (!user) return res.status(400).json({
        msg: "User Not Found"
    });

    res.status(200).json({
        branches: user.branches
    })
})

// create branch
router.post('/createBranch', ValidateToken , async (req, res) => {
    const {
        name,
        balance
    } = req.body
    
    const user = await User.findById(req.user.id)
    
    const existedBranch = user.branches.find(branch => branch.name == name);

    if (existedBranch) return res.status(400).json({msg: "Branch Is Already Exists"});

    user.branches.push({
        name,
        balance
    });


    await user.save();

    res.status(201).json({
        msg: 'Branch Created Successfully'
    })
})

module.exports = router;