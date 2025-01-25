const { Router } = require('express');
const authRoutes = require('./auth.routes');
const transactionRoutes = require('./transaction.routes');

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/transactions', transactionRoutes);

module.exports = routes;