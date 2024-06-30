import Image from "next/image";
import Link from "next/link";
//import '@material-tailwind/react/tailwind.css';
import LoginPage from "./(auth)/login/page";

import Header from "./header/page";
import { inter , lusitana } from "./ui/font";
import Sidnav from "./dashboard/sidnav/page";
import FooterPage from "./footer/page";
import Wallet from "@/app/(boardpage)/wallet/page";
import DashboardPage from "./dashboard/page";
import { useRouter } from "next/router";

//import { WalletProvider } from '../components/wallet/WalletProvider';



export default function Home() {
  return (
<html lang="en">
  <body className={inter.className}>
    <header className="flex flex-col  justify-center  ">
    <Header />
      <div className="flex flex-col items-center justify-center w-full flex-1 text-center border-slate-300 bg-gray-200">
       
       
      </div>
    </header>
  
    
<main className="flex flex-col w-full min-h-screen
           bg-gray-200 mb-4">

<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 ">
       <Sidnav />
      </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          <div className="flex flex-col m-4">
            <div className="">
              <p  className="" >Bonjour cher User 01</p>
            </div>
            <div className="flex flex-col m-4 h-2 ">
              <Wallet/>APPAPPAPP
              <div className=" ">
                  <p>APPAPPAPPhhhhhhhhhhhhhhhhhhhhdddd</p>
                  <p>APPAPPAPPhhhhhhhhhhhhhhhhhhhhdddd</p>
                  <p>APPAPPAPPhhhhhhhhhhhhhhhhhhhhdddd</p>
                  <p>APPAPPAPPhhhhhhhhhhhhhhhhhhhhdddd</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
       
      
</main>
<footer className="flex flex-col  justify-center  ">
          <FooterPage />
  </footer> 
        
</body>
</html>
  );
}
