
import React, { use } from 'react';
//import { useTable } from 'react-table';
import Link from 'next/link';
import Image from "next/image";
//import {   } from "module";

const Table = () => {
  const data = [
    { id: 1, date:'date', name: 'John Doe', copy:'copy' },
    { id: 2, date:'date', name: 'John', copy:'copy'  },
    { id: 3,  date:'date', name: 'Jane Smith', copy:'copy'  },
    { id: 4, date:'date', name: ' Doe',copy:'copy'  },
    { id: 5, date:'date', name: 'Sam Brown', copy:'copy'  },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Copy</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.id}</td>
              <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.date}</td>
              <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.name}</td>
              <td className="px-6 py-4 text-slate-800 whitespace-nowrap border-b border-gray-200">{item.copy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;


