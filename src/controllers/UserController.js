const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const prisma = new PrismaClient();

class UserController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const userExists = await prisma.user.findUnique({
        where: { email }
      });

      if (userExists) {
        return res.status(400).json({ error: 'Usuário já existe' });
      }
      const hashedPassword = await bcrypt.hash(password, 8);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword
        }
      });

      const token = jwt.sign({ id: user.id }, authConfig.jwt.secret, {
        expiresIn: authConfig.jwt.expiresIn
      });

      return res.json({ user, token });
      
    } catch (error) {
      console.error(error); 
      return res.status(400).json({ error: error.message });

    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const token = jwt.sign({ id: user.id }, authConfig.jwt.secret, {
        expiresIn: authConfig.jwt.expiresIn
      });

      return res.json({ user, token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
