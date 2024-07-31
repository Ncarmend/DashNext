
import React, { ReactNode } from "react";
import Link from 'next/link';
import Image from "next/image";
import Header from "@/app/header/page";
import Sidnav from "@/app/dashboard/sidnav/page";
import PageFooter from "@/app/footer/page";
import Tabledoc from "@/app/ui/tbledoc";

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




const MainComponent: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen ">
        <Header />
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64 min-h-screen">
            <Sidnav />
          </div>
          <div className=" w-full flex-grow flex-col md:overflow-y-auto md:p-12">
            {/* Afficher les données en utilisant le composant Tabledoc */}
            <Tabledoc data={data} />
            <div className="bg-cyan-700"><Tabledoc data={data} /></div>
            <div className="bg-black my-4">
              <p>bbbbbbbbb</p>
            </div>
            <div></div>
          </div>
        </div>
        <PageFooter />
      </div>
    </>
  );
};

export default MainComponent;

