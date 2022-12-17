const model = require('../models/model')

// Post: http://localhost:8080/api/categories
const create_Categories = async(req, res)=>{
    const create = new model.Categories({
        type:"Investment",
        color:'#1F5C'
    })
    create.save(function (err) {
        if (!err)
            return res.json(create);
        return res.status(400).json({ message: `Error while creating categories ${err}` });
    })
}

// Get: http://localhost:8080/api/categories
const get_categories = async(req, res)=>{
    let data = await model.Categories.find({});
    const filter = await data.map(v=>Object.assign({}, {type:v.type, color:v.color}))
    return res.json(filter)
}


// Post: http://localhost:8080/api/transaction
const create_transaction = async(req, res)=>{
    const {name, type, amount} = req.body;
    const create = await new model.Transaction({
        name,
        type,
        amount
    })
    await create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({message:`Error while creating transaction ${err}`})
    })
}

// Get: http://localhost:8080/api/transaction
const get_transaction = async(req, res)=>{
    const data = await model.Transaction.find({})
    res.json(data)
}

// Delete: http://localhost:8080/api/transaction
const delete_transaction = async(req, res)=>{
    if(!req.body) return res.status(400).json({message:`Req body not found`})
    await model.Transaction.deleteOne(req.body, function(err){
        if(!err) res.json(`Record Deleted !`)
    }).clone().catch(function(err){
        res.json("Err while deleting transaction record")
    })
}

// Get: http://localhost:8080/api/labels
const get_Label = async(req, res)=>{
    await model.Transaction.aggregate([
        {
            $lookup:{
                from:'categories',
                localField:'type',
                foreignField:'type',
                as:'categories_info'
            }
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result=>{
        console.log(result);
        const data = result.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info['color']}))
        res.json(data)
    }).catch(err=>{
        res.status(400).json(`Look Up Collection Error`)
    })
}


module.exports = {
    create_Categories,
    get_categories,
    create_transaction,
    get_transaction,
    delete_transaction,
    get_Label
    };