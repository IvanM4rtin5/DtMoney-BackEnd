const { Router } = require('express');
const TransactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/auth');

const routes = Router();

routes.use(authMiddleware); // Todas as rotas precisam de autenticação

routes.post('/', TransactionController.create);
routes.get('/', TransactionController.index);
routes.get('/:transactionId', TransactionController.show);
routes.put('/:transactionId', TransactionController.update);
routes.delete('/:transactionId', TransactionController.delete);

module.exports = routes;