"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import React from "react";

const Tabledoc = () => {
  const btref = useRef();

  useEffect(() => {
    btref.current.focus();
  }, []);

  const [content, setContent] = useState(0);

  const data = [
    {
      id: 1,
      title: <h1 className="text-2xl text-blue-500">Document 1</h1>,
      copy: "Copy 1",
      content: (
        <div className="border-3 p-4 rounded-lg">
          <h1 className="text-2xl text-blue-500">Portefeuille11</h1>
          <p>
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: <h1 className="text-2xl text-blue-500">Document 2</h1>,
      copy: "Copy 2",
      content: (
        <div className="border-3 p-4 rounded-lg">
          <h1 className="text-2xl text-blue-500">Portefeuille22</h1>
          <p>
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: <h1 className="text-2xl text-blue-500">Document 3</h1>,
      copy: "Copy 3",
      content: (
        <div className="border-3 p-4 rounded-lg">
          <h1 className="text-2xl text-blue-500">Portefeuille3</h1>
          <p>
            Le portefeuille de votre enfant est un outil qui vous permet de
            suivre les dépenses de votre enfant.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className=" min-w-full justify-center items-center flex flex-col p-7 ">
      <div className="   flex flex-col    w-full">
        <div className=" bg-zinc-200 p-1 flex  flex-row  rounded-xl justify-between  items-center gap-x-2 font-bold text-white">
          {data.map((item, index) => (
            <button
              ref={index === 0 ? btref : null}
              key={index}
              onClick={() => setContent(index)}
              className={`
                  out-line-none
                  bg-zinc-400  flex flex-col  items-center p-2  w-full  hover:bg-cyan-400 rounded-xl text-center focus:ring-2 focus:bg-white ${
                    content === index ? "bg-cyan-400  text-blue-600 " : ""
                  }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="min-w-full p-2 rounded-xl">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${
                content === index ? "" : "hidden"
              } bg-slate-800 rounded-lg p-4   w-full`}
            >
              <p className="">{item.copy}</p>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tabledoc;
