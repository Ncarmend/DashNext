import { createContext, useState } from 'react';
//import { transaction } from '@/app/(boardpage)/wallet/transaction';
import { transaction } from '@/app/(boardpage)/wallet/transaction';
export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  const addFunds = (amount) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    setTransactions([...transactions, { type: 'Deposit', amount, newBalance }]);
  };

  const withdrawFunds = (amount) => {
    const newBalance = balance - amount;
    setBalance(newBalance);
    setTransactions([...transactions, { type: 'Withdrawal', amount, newBalance }]);
  };

  return (
    <WalletContext.Provider value={{ balance, transactions, addFunds, withdrawFunds }}>
      {children}
    </WalletContext.Provider>
  );
};
