import React from "react";
//import { useRouter } from "next/router";
//import { useAuth } from "@/app/auth";
import Header from "@/app/header/page"
import { useRouter } from "next/router";
//import { useAuth } from "@/app/auth";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Sidnav from "@/app/dashboard/sidnav/page";
import Image from "next/image";
import Tabledoc from "@/app/ui/tabledoc";
//import Wallet from "@/app/wallet/page";
import TableF from "@/app/ui/tablef";
import PageFooter from "@/app/footer/page";


export default function Layout({ children } : { children: React.ReactNode }) {
  
  //const router = useRouter();
  const pathName = usePathname();
 
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-200">
     
      <div className="flex h-screen flex-col md:flex-row    md:overflow-hidden">
        <div className="w-full flex-none md:w-64  min-h-screen ">
          
        </div>
        <div className="flex-grow flex-col p-6 md:overflow-y-auto md:p-12">
          <div className="flex flex-col m-4 h-12">
         
          </div>
          <div className=" bg-cyan-700 ">
          
          </div>
          
          
          
          <div className="flex flex-col m-4 h-2 ">
          {children}Layouts
          </div>
          <div className="flex flex-col m-4 h-2  bg-lime-500">
      
          </div>
          <div className="">
          
          </div>
          <div className="">
          
          </div>
          
        </div>
      </div>

       
    </div>
  
  );
    
    

}