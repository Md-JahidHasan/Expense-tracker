const model = require('../models/model')

// Post: http://localhost:8080/api/categories
const create_Categories = async(req, res)=>{
    const Create = new model.Categories({
        type:"Investment",
        color:'#1F5C'
    })
    await Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message:`Error while creating categories ${err}`})
    })
}

// Get: http://localhost:8080/api/categories
const get_categories = async(req, res)=>{
    let data = await model.Categories.find({});
    const filter = await data.map(v=>Object.assign({}, {type:v.type, color:v.color}))
    return res.json(filter)
}


// Post: http://localhost:8080/api/transection
const create_transection = async(req, res)=>{
    const {name, type, amount} = req.body;
    const create = await new model.Transection({
        name,
        type,
        amount
    })
    await create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({message:`Error while creating transection ${err}`})
    })
}

// Get: http://localhost:8080/api/transection
const get_transection = async(req, res)=>{
    const data = await model.Transection.find({})
    res.json(data)
}

// Get: http://localhost:8080/api/transection
const delete_transection = async(req, res)=>{
    if(!req.body) return res.status(400).json({message:`Req body not found`})
    await model.Transection.deleteOne(req.body, function(err){
        if(!err) res.json(`Record Deleted !`)
    }).clone().catch(function(err){
        res.json("Err while deleting transection record")
    })
}

// Get: http://localhost:8080/api/label
const get_Label = async(req, res)=>{
    model.Transection.aggregate([
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
        const data = result.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info['color']}))
        res.json(data)
    }).catch(err=>{
        res.status(400).json(`Look Up Collection Error`)
    })
}


module.exports = {
    create_Categories,
    get_categories,
    create_transection,
    get_transection,
    delete_transection,
    get_Label
    };