require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

console.log('Variáveis de ambiente carregadas:');
console.log('SERVER_PORT:', process.env.SERVER_PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Definido' : 'Não definido');

const corsOptions = {
  origin: ['http://localhost:3001','https://dtmoney-financial-app.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:${PORT}`));
