import React from "react";
//import { useRouter } from "next/router";
import { lusitana } from "../../ui/font";
// Remove the following line to fix the duplicate identifier issue



import Link from "next/link";
import Table from "./documnt/page";

export default function Sidnav({ children } : { children: React.ReactNode }) { 
  //const router = useRouter();

  return (
    <>
    <div className="flex w-auto  flex-row py-6 px-6         border-slate-700">
            <div className="flex   rounded-sm bg-gray-400 border-slate-700">
                <ul className="flex w-56 gap-1 m-2  flex-col ml-1 p-2  {`${lusitana.className}  text-md text-gray-800 md:text-xl md:leading-normal`}">
                   <li className="  border-b p-2 border-slate-500">
                    <Link href="./dashboard/documnt">Dashboard</Link>
                    Tableau de Bord</li> 
                   <li className= " border-b border-slate-500  p-2 `${lusitana.className}">
                    <Link href="./dashboard/sidnav/documnt">Documents</Link>
                    </li>
                   <li className="  border-b p-2 border-slate-500">
                     <Link href="./dashboard/sidnav/finances" > Finances 
                     </Link>
                    </li>
                   <li className="  border-b  p-2 border-slate-500">Repas</li>
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

    <div>
      <div>
      <Table/>

      </div>
      <div>

      </div>
    </div>
    </>
  );
}