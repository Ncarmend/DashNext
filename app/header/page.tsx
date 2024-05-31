import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header (){

    return(
        
        <header className="flex items-center  p-2 bg-gray-600 text-white  ">
          <div className="flex flex-row py-6 px-6      border-spacing-2  border-slate-300 text-gray-300">
              <Image  className="w-40 h-10 rounded m-2" src="/image/llogo3.png" alt="logo" width={100} height={100} />
              <div className=" text-lg w-64 justify-around rounded-md m-2 ml-10 ">AIDE</div>
              <div className=" text-lg w-64 justify-around rounded-md m-2 ml-10 ">CENTRE SCOLAIRE S-M</div>
              <div className="flex flex-row text-lg w-72 justify-around rounded-md m-2 ml-10 
              ">
                  <Image className="rounded-full" src="/image/profiltphot.png" alt="logo" width={30} height={30} />
                  <p>Bienvenue sur User100000</p></div>
  
          </div>
  
        </header>
    )
}