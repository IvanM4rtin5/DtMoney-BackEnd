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
  async show(req, res) {
    try {
      const { transactionId } = req.params;
      console.log('TransactionId:', transactionId);
      console.log('UserId:', req.userId);
  
      // Consulte o banco de dados
      const transaction = await prisma.transaction.findFirst({
        where: {
          id: transactionId, // Use o transactionId diretamente (sem conversão)
          userId: req.userId
        }
      });
      console.log('Transaction found:', transaction);
  
      // Verifique se a transação foi encontrada
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }
  
      // Retorne a transação encontrada
      return res.status(200).json(transaction);
    } catch (error) {
      console.error('Erro ao buscar transação:', error);
      return res.status(500).json({ error: 'Erro ao buscar transação' });
    }
  }

async update(req, res) {
  try {
    const { transactionId } = req.params;
    const { title, amount, type, category } = req.body;

    const transaction = await prisma.transaction.update({
      where: {
        id: transactionId,
        userId: req.userId // Adicione essa verificação
      },
      data: {
        title,
        amount: Number(amount),
        type,
        category
      }
    });

    return res.status(200).json(transaction); // Adicione status(200) explicitamente
  } catch (error) {
    console.error('Erro ao atualizar transação:', error);
    return res.status(500).json({ error: 'Erro ao atualizar transação' });
  }
}

async delete(req, res) {
  try {
    const { transactionId } = req.params;

    await prisma.transaction.delete({
      where: {
        id: transactionId,
        userId: req.userId // Adicione essa verificação
      }
    });

    return res.status(200).json({ message: 'Transação excluída com sucesso' }); // Adicione status(200) explicitamente
  } catch (error) {
    console.error('Erro ao excluir transação:', error);
    return res.status(500).json({ error: 'Erro ao excluir transação' });
  }
}
}

module.exports = new TransactionController();