import React from "react";
//import { useRouter } from "next/router";
//import { useAuth } from "@/app/auth";
import Header from "../header/page";
import Sidnav from "./sidnav/page";
import Image from "next/image";
import Table from "@/app/(boardpage)/documnt/page";
import Wallet from "@/app/(boardpage)/wallet/page";
import TableF from "@/app/(boardpage)/finances/page";
import PageFooter from "../footer/page";

export default function Layout({ children } : { children: React.ReactNode }) {
  
  //const router = useRouter();
  //const pathName = usePathname();
 
  return (
    <div className="flex flex-col w-full min-h-screen  bg-red-600">
      <Header />
      <div className="flex h-screen flex-col md:flex-row    md:overflow-hidden">
        
        <div className="w-full flex-none md:w-64  min-h-screen ">
          <Sidnav />
        </div>
        <div className="flex-grow flex-col p-6 md:overflow-y-auto md:p-12">
          <div className="flex flex-col m-4 h-12">
         
          </div>
          <div className=" bg-cyan-700 ">
          <Wallet/>
          </div>
          
          
          
          
          <div className=" bg-lime-500">
          <Wallet/>
          </div>
          <div className=" bg-black">
          
          </div>
          <div className=" ">
          <Table />
          </div>
          <div className="">
          
          </div>
          
        </div>
      </div>

        <PageFooter />
    </div>
  
  );
    
    

}