const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TransactionController {
  async create(req, res) {
    try {
      const { title, amount, type, category } = req.body;

      const transaction = await prisma.transaction.create({
        data: {
          title,
          amount: Number(amount),
          type,
          category,
          userId: req.userId
        }
      });

      return res.json(transaction);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(req, res) {
    try {
      const transactions = await prisma.transaction.findMany({
        where: {
          userId: req.userId
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return res.json(transactions);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new TransactionController();