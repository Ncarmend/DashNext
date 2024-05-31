import React from "react";
type Props = {};
export default function InscriptionPage({}: Props) {
    return (
        <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
            <div className="flex h-20 w-full items-end rounded-lg bg-green-600 p-3 md:h-36">
            <div className="w-32 text-white md:w-36">
                <h2 className="bg-blue-400 text-4xl w-64 justify-around rounded-md m-2 ml-10 ">Inscription</h2>
            </div>
            </div>
        </div>
        </main>
    );
    }
