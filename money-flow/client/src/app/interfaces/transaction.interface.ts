type TransactionType = 'income' | 'expense' | 'transfer';

export interface Transaction {
  _id: string;
  type: TransactionType;
  from: {
    id: string;
    name: string;
  };
  to: {
    id: string;
    name: string;
  };
  amount: number;
  note: string;
  createdBy: {
    id: string;
    name: string;
  };
  createdAt: string;
}

export const defaultTransaction: Transaction = {
  _id: '',
  from: {
    id: '',
    name: ''
  },
  to: {
    id: '',
    name: ''
  },
  type: 'income',
  amount: 0,
  createdAt: '',
  createdBy: {
    id: '',
    name: '',
  },
  note: ''
}