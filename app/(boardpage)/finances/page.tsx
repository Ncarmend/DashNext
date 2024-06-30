

import React, { use } from 'react';
//import { useTable } from 'react-table';
import Link from 'next/link';
import Image from "next/image";
import Header from "@/app/header/page";
import Sidnav from "@/app/dashboard/sidnav/page";
import PageFooter from "@/app/footer/page";
import Wallet from '@/app/(boardpage)/wallet/page';
import Tabledoc from '@/app/ui/tabledoc';
import TableF from '@/app/ui/tablef';
//import {   } from "module";

const Table = () => {
  return (
  <>
    <div className="flex flex-col w-full min-h-screen  bg-blue-600">
      <Header />
      <div className="flex h-screen flex-col md:flex-row    md:overflow-hidden">
        
        <div className="w-full flex-none md:w-64  min-h-screen ">
          <Sidnav />
        </div>
        <div className="flex-grow flex-col p-6    md:overflow-y-auto md:p-12">
          <TableF />
          
          <div className=" bg-cyan-700 ">
          
          </div>
          

          <div className=" bg-black">
          
          </div>
         
          <div className="">
          
          </div>
          
        </div>
      </div>

        <PageFooter />
    </div>
    </>
  );
};
export default Table;


