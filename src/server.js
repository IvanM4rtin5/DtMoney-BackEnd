require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Debug das variáveis de ambiente
console.log('Variáveis de ambiente carregadas:');
console.log('SERVER_PORT:', process.env.SERVER_PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Definido' : 'Não definido');

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(routes);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:${PORT}`));