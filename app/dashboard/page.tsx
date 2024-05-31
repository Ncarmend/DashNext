import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidnav from "./sidnav/page";
//import { lusitana } from '@/app/ui/fonts';
import { Inter, Lusitana } from "next/font/google";
type Props = {};
export default function DashboardPage({ children } : { children: React.ReactNode }) {
    return (
        <main className="flex flex-col  min-h-screen
           bg-gray-200">

<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 ">
       <Sidnav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
       {children} kkkkkkkkkkkkdashbord
      </div>
      </div>
        </main>
    );
    }