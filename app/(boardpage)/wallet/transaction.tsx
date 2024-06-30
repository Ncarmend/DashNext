import Sidnav from '@/app/dashboard/sidnav/page';
import { useContext } from 'react';
//import { WalletContext } from '@/app/(boardpage)/wallet/WalletProvider';
//import { WalletProvider } from '@/app/(boardpage)/wallet/WalletProvider';


const TransactionsPage = () => {
  const { transactions } = useContext(WalletContext);

  return (
    <div>
      <Sidnav />
      <div className="p-4">
        <h2 className="text-2xl mb-4">Transactions</h2>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index} className="mb-2">
              {transaction.type}: ${transaction.amount.toFixed(2)} (New Balance: ${transaction.newBalance.toFixed(2)})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionsPage;
