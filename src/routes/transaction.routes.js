const { Router } = require('express');
const TransactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/auth');

const routes = Router();

routes.use(authMiddleware); // Todas as rotas precisam de autenticação

routes.post('/', TransactionController.create);
routes.get('/', TransactionController.index);

module.exports = routes;