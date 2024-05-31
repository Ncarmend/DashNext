import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    return (
      <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <div className="flex h-20 w-full items-end rounded-lg bg-blue-600 p-3 md:h-36">
            <div className="w-32 text-white md:w-36">
             <h2 className="bg-blue-400 text-3xl  items-center p-5 m-6 rounded-lg">Login</h2> 
            </div>
          </div>
          
        </div>
      </main>
    );
  }