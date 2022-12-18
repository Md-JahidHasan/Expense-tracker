const routes = require('express').Router();
const controller = require('../controller/controller');

routes.route('/')
    .get((req,res)=>res.json("Get request from home"))

    
routes.route('/api/categories')
    .post(controller.create_Categories)
    .get(controller.get_categories)


routes.route('/api/transaction' )
    .post(controller.create_transaction)
    .get(controller.get_transaction)
    .delete(controller.delete_transaction)


routes.route('/api/labels')
    .get(controller.get_Label)

    module.exports = routes;