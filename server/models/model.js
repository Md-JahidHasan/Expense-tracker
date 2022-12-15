const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Categories field=>['type', 'color']
const categories_model = new Schema({
    type:{type:String, default:'Investment'},
    color:{type:String, default:'#FCBE44'}
})


// Transection field=>['name', 'type', 'color', 'date']
const transection_model = new Schema({
    name:{type:String, default:'Anonymus'},
    type:{type:String, default:'Investment'},
    amount:{type:Number},
    date:{type:Date, default: Date.now}
})

const Categories = mongoose.model('categories', categories_model);
const Transection = mongoose.model('transection', transection_model);

exports.default = Transection;
module.exports = {
    Transection,
    Categories
}