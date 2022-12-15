const routes = require('express').Router();
const controller = require('../controller/controller');

routes.route('/api/categories')
    .post(controller.create_Categories)
    .get(controller.get_categories)


routes.route('/api/transection')
    .post(controller.create_transection)
    .get(controller.get_transection)
    .delete(controller.delete_transection)


routes.route('/api/label')
    .get(controller.get_Label)

    module.exports = routes;