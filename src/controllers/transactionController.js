const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TransactionController {
  async create(req, res) {
    try {
      const { title, amount, type, category } = req.body;
      if (!title || !amount || !type || !category) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }
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
      const formattedTransactions = transactions.map((tx) => ({
        ...tx,
        amount: Number(tx.amount)
      }))

      return res.json(formattedTransactions);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async show(req, res) {
    try {
      const { transactionId } = req.params;
  
      // Consultar o banco de dados
      const transaction = await prisma.transaction.findFirst({
        where: {
          id: transactionId, 
          userId: req.userId
        }
      });
      
      // Verificar se a transação foi encontrada
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }
  
      // Retornar a transação formatada
      return res.status(200).json({
        ...transaction,
        amount: Number(transaction.amount)
      });
  
    } catch (error) { 
      return res.status(500).json({ error: 'Erro ao buscar transação' });
    }
  }
  async update(req, res) {
  try {
    
    const { transactionId } = req.params;
    const { title, amount, type, category } = req.body;
    if (!title || !amount || !type || !category) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const transaction = await prisma.transaction.update({
      //adicionar verificação de usuário
      where: {
        id: transactionId,
        userId: req.userId 
      },
      data: {
        title,
        amount: Number(amount),
        type,
        category
      }
    });

    return res.status(200).json(transaction); 
  } catch (error) {
    // console.error('Erro ao atualizar transação:', error);
    return res.status(500).json({ error: 'Erro ao atualizar transação' });
  }
}

 async delete(req, res) {
  try {
    const { transactionId } = req.params;

    await prisma.transaction.delete({
      where: {
        id: transactionId,
        userId: req.userId // Adicionar verificação de usuario
      }
    });

    return res.status(200).json({ message: 'Transação excluída com sucesso' }); 
  } catch (error) {
    console.error('Erro ao excluir transação:', error);
    return res.status(500).json({ error: 'Erro ao excluir transação' });
  }
}
}

module.exports = new TransactionController();