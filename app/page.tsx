import Image from "next/image";
import Link from "next/link";
import LoginPage from "./(auth)/login/page";

import Header from "./header/page";
import { inter , lusitana } from "./ui/font";
import Sidnav from "./dashboard/sidnav/page";
import FooterPage from "./dashboard/footer/page";
import { useRouter } from "next/router";


export default function Home( { children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <header className="flex flex-col  justify-center  ">
      <div className="flex flex-col items-center justify-center w-full flex-1 text-center border-slate-300 bg-gray-200">
        <Header />
       
      </div>
    </header>
  
    
    <main className="flex flex-col w-full min-h-screen
           bg-gray-200">

<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
       <Sidnav />
      </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        </div>
      </div>
      <div className="flex flex-col w-full h-40  rounded-sm items-center m-4">
          <FooterPage />
      </div>
    </main>
        
  </body>
</html>
  );
}
