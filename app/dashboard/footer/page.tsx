import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};
export default function FooterPage() {
    return (
       
        <div className="flex flex-col  border-sm  bg-gray-400  shadow-lg">
        <ul className="flex  gap-32  flex-row   border-slate-400 border-y  text-md text-gray-200 bg-gray-600 md:text-lg ">
          <li className="  p-2 m-4  ">Copyrite</li>
          <li className="  p-2 m-4  ">Privacy Policy</li>
          <li className="  p-2 m-4  ">Terms of Service</li>
          <li className="  p-2 m-4 ">Contact Us 1111111layout</li>
        </ul>
    </div>
     );
    }