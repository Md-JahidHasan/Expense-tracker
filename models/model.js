const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Categories field=>['type', 'color']
const categories_model = new Schema({
    type:{type:String, default:'Investment'},
    color:{type:String, default:'#FCBE44'}
})


// Transaction field=>['name', 'type', 'color', 'date']
const transaction_model = new Schema({
    name:{type:String, default:'Anonymus'},
    type:{type:String, default:'Investment'},
    amount:{type:Number},
    date:{type:Date, default: Date.now}
})

const Categories = mongoose.model('categories', categories_model);
const Transaction = mongoose.model('transaction' , transaction_model);

exports.default = Transaction;
module.exports = {
    Transaction,
    Categories
}