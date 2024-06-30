import React from 'react';
//import { useTable } from 'react-table';
import Link from 'next/link';

const TableF = () => {
  const data = [
    { id: 1, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    { id: 2, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    { id: 3, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    { id: 4, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    { id: 5, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    { id: 6, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    { id: 7, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    { id: 8, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    { id: 9, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    { id: 10, date:'d', invoice: 'Ok',credit:"rising",wallet:'rising', transaction:'rising',  status:'rising'},
    
  ];

  return (
    <div className="overflow-x-auto">
        <h1 className="text-3xl text-black font-semibold">Finances</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoices</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wallet</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.id}</td>
              <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.date}</td>
              <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.invoice}</td>
              <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.wallet}</td>
                <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.transaction}</td>
                <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.status}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableF;
