import prisma from '../config/prismaClient';
import { BadRequestError } from '../utils/errors';

export const createTransaction = async (userId, { title, amount, type, category }) => {
  try {
    // Validações mais detalhadas
    if (!title?.trim()) {
      throw new BadRequestError('O título da transação é obrigatório');
    }

    if (!amount || amount <= 0) {
      throw new BadRequestError('O valor da transação deve ser maior que zero');
    }

    if (!type || !['deposit', 'withdraw'].includes(type)) {
      throw new BadRequestError('O tipo da transação deve ser deposit ou withdraw');
    }

    if (!category?.trim()) {
      throw new BadRequestError('A categoria da transação é obrigatória');
    }

    const formattedAmount = Number(amount);

    const transaction = await prisma.transaction.create({
      data: {
        title: title.trim(),
        amount: formattedAmount,
        type,
        category: category.trim(),
        userId,
        createdAt: new Date(),
      },
    });

    return transaction;
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw error;
    }
    throw new Error(`Erro ao criar transação: ${error.message}`);
  }
};

export const getTransactionsByUserId = async (userId, filters = {}) => {
  try {
    const { startDate, endDate, type, category } = filters;

    // Constrói o where dinamicamente baseado nos filtros
    const where = {
      userId,
      ...(startDate && endDate && {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      }),
      ...(type && { type }),
      ...(category && { category }),
    };

    const transactions = await prisma.transaction.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    // Calcula totais
    const totals = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'deposit') {
          acc.totalDeposits += transaction.amount;
        } else {
          acc.totalWithdraws += transaction.amount;
        }
        acc.balance = acc.totalDeposits - acc.totalWithdraws;
        return acc;
      },
      { totalDeposits: 0, totalWithdraws: 0, balance: 0 }
    );

    return {
      transactions,
      totals,
    };
  } catch (error) {
    throw new Error(`Erro ao buscar transações: ${error.message}`);
  }
};

// Função adicional para buscar uma transação específica
export const getTransactionById = async (transactionId, userId) => {
  try {
    const transaction = await prisma.transaction.findFirst({
      where: {
        id: transactionId,
        userId, 
      },
    });

    if (!transaction) {
      throw new NotFoundError('Transação não encontrada');
    }

    return transaction;
  } catch (error) {
    if (error instanceof NotFoundError) {
      throw error;
    }
    throw new Error(`Erro ao buscar transação: ${error.message}`);
  }
};
