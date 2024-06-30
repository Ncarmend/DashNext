'use client';
import React from "react";
//import { useRouter } from "next/router";
import { lusitana } from "../../ui/font";
import Link from "next/link";
import { usePathname } from "next/navigation"
//import { useAuth } from "@/app/auth";
import Table from "@/app/(boardpage)/documnt/page";
import TableF from "@/app/(boardpage)/documnt/page";
import Reapas from "@/app/(boardpage)/documnt/page";
//import { useAuth } from "@/app/auth";
// Remove the following line to fix the duplicate identifier issue
import { useRouter } from "next/router";

export default function Sidnav({ children } : { children: React.ReactNode }) { 
  //const router = useRouter();
  const pathName = usePathname();

  return (
    
    <div className="flex w-auto  flex-row py-6 px-6         border-slate-700">
            <div className="flex   rounded-sm bg-gray-400 border-slate-700">
                <ul className="flex w-56 gap-1 m-2  flex-col ml-1 p-2  {`${lusitana.className}  text-md text-gray-800 md:text-xl md:leading-normal`}">
                   <li className="  border-b p-2 border-slate-500">
                    <Link href= "/">Dashboard</Link>
                    Tableau de Bord</li> 
                   <li className= " border-b border-slate-500  p-2 `${lusitana.className}">
                    <Link href= "./documnt">Documents</Link>
                    </li>
                   <li className="  border-b p-2 border-slate-500">
                     <Link href="/finances"> Finances 
                     </Link>
                    </li>
                   <li className="  border-b  p-2 border-slate-500">
                    <Link href="/repas"> Repas
                    </Link>
                    </li>
                   <li className="
                     border-b p-2 border-slate-500">Photos</li>
                   
                    <li className="
                     border-b p-2 border-slate-500">Absence/Retard</li>

                    <li className="
                     border-b p-2 border-slate-500">Reunion de parents</li>
                    <li className=" border-b p-2 border-slate-500">Manuel Scolaire</li>
                    
                    <li className=" border-b p-2 border-slate-500">E-Shop</li>
                    <li className="
                       border-b p-2 border-slate-500">Extra-scolaire</li>
                </ul>

            </div>
    </div>
);
}