import React, { ReactNode } from "react";
//import React, { use, ReactNode } from 'react';
//import { useTable } from 'react-table';
import Link from 'next/link';
import Image from "next/image";
import Header from "@/app/header/page";
import Sidnav from "@/app/dashboard/sidnav/page";
import PageFooter from "@/app/footer/page";

//import Wallet from '@/app/(boardpage)/wallet/page';
//import Tabledoc from '@/app/ui/tabledoc';
//import {   } from "module";


interface Props {
  children?: ReactNode;
  data: Data[]; // Correction du type 'data' en 'Data'
}

type Data = {
  id: number;
  title: string;
  copy: string;
  content: ReactNode; // Correction du type 'content' pour accepter des éléments React
};
items-[(item)]


const Tabledoc: React.FC<Props> = ({ data }) => {
  
return (
  <>
    <div className="flex flex-col w-full min-h-screen  bg-red-600">
      <Header />
      <div className="flex h-screen flex-col md:flex-row    md:overflow-hidden">
        
        <div className="w-full flex-none md:w-64  min-h-screen ">
          <Sidnav />
        </div>
        <div className="flex-grow flex-col p-6    md:overflow-y-auto md:p-12">
          <Tabledoc data={data} /> {/* Pass the 'data' property to the 'Tabledoc' component */}

          {/*ici je met tabledoc pour afficher les données*/}
          <div className="bg-slate-500 rounded-lg mx-4 p-8">
      <h1 className="text-2xl text-blue-500">Document concernant votre enfant</h1>
      <div className="max-w-md flex flex-col gap-y-2 w-full">
        {data.map((items) => (
          <div key={item.id} className="border-3 border-blue-500 p-4 rounded-lg">
            <h2 className="text-xl text-blue-500">{item.title}</h2>
            <p>{item.copy}</p>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
   {/*jusqu'ici*/}
          
          <div className=" bg-cyan-700 ">
          
          </div>
          

          <div className=" bg-black my-4">
          <p> Hello</p>
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
export default Tabledoc;


