import React from "react";
//import { useRouter } from "next/router";
//import { useAuth } from "@/app/auth";
import Header from "../header/page";
import Sidnav from "./sidnav/page";
import Image from "next/image";

export default function Layout({ children } : { children: React.ReactNode }) {
  
  //const router = useRouter();

 
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-200">
      <Header />
      <div className="flex h-screen flex-col md:flex-row  md:overflow-hidden">
        <div className="w-full flex-none md:w-64  min-h-screen ">
          <Sidnav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}Layouts
          
        </div>
      </div>

      <div className="flex flex-col m-4  bg-gray-600">
        <ul className="flex  gap-32  flex-row border-slate-400 border-y  text-md text-gray-200 bg-gray-600 md:text-xl ">
          <li className="  p-2 m-4  ">Copyrite</li>
          <li className="  p-2 m-4  ">Privacy Policy</li>
          <li className="  p-2 m-4  ">Terms of Service</li>
          <li className="  p-2 m-4 ">Contact Us layout</li>
          
          
          </ul>
          

      </div>
    </div>
  );
    
    

}