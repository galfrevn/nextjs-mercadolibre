import Link from "next/link";
import React from "react";

function Grid() {
  return (
    <div className="px-3 bg-[#ebebeb] mb-6 mt-6 lg:hidden">
      <div className="bg-white p-3 rounded-t-md border">
        <h2 className="font-semibold">Inspirado en lo último que viste</h2>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-0 border-l border-r">
        <Link href="/product/10">
          <div className="bg-white border-b border-r">
            <img
              className="p-3"
              src="https://http2.mlstatic.com/D_Q_NP_2X_968478-MLA31608238270_072019-P.webp"
              alt=""
            />
            <div className="flex flex-col justify-center w-100 p-2">
              <div className="flex">
                <p className="text-md text-gray-600">$8.992</p>
                <p className="ml-4 mt-1 text-xs text-green-500">28% OFF</p>
              </div>
              <p className=" text-xs mt-2 text-green-500">Envio gratis</p>
              <p className=" text-[10px] mt-1 text-gray-500 ">
                Zonazero Mochila Jansport Digital Student Con Funda{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link href="/product/11">
          <div className="bg-white border-b ">
            <img
              className="p-3"
              src="https://http2.mlstatic.com/D_Q_NP_2X_740079-MLA46258541751_062021-P.webp"
              alt=""
            />
            <div className="flex flex-col justify-center w-100 p-2">
              <div className="flex">
                <p className="text-md text-gray-600">$8.992</p>
              </div>
              <p className=" text-xs mt-2 text-green-500">Envio gratis</p>
              <p className=" text-[10px] mt-1 text-gray-500 ">
                Mochila Jansport Cross Town Bolsillo Botella Original 26 Lts
              </p>
            </div>
          </div>
        </Link>

        <Link href="/product/12">
          <div className="bg-white border-r">
            <img
              className="p-3"
              src="https://http2.mlstatic.com/D_Q_NP_2X_740675-MLA48136726982_112021-P.webp"
              alt=""
            />
            <div className="flex flex-col justify-center w-100 p-3">
              <div className="flex">
                <p className="text-md text-gray-600">$8.992</p>
              </div>
              <p className=" text-xs mt-2 text-green-500">Envio gratis</p>
              <p className=" text-[10px] mt-1 text-gray-500 ">
                Mochila Everlast Original Urbana Resistente Gimnasio
              </p>
            </div>
          </div>
        </Link>

        <Link href="/product/13">
          <div className="bg-white ">
            <img
              className="p-3"
              src="https://http2.mlstatic.com/D_Q_NP_2X_943770-MLA48268643527_112021-P.webp"
              alt=""
            />
            <div className="flex flex-col justify-center w-100 p-3">
              <div className="flex">
                <p className="text-md text-gray-600">$8.992</p>
                <p className="ml-4 mt-1 text-xs text-green-500">28% OFF</p>
              </div>
              <p className=" text-xs mt-2 text-green-500">Envio gratis</p>
              <p className=" text-[10px] mt-1 text-gray-500 ">
                Mochila Mujer Hombre Antidesgarro Porta Notebook
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-white p-3 rounded-b-md border-b flex border justify-between shadow-sm">
        <a href="#" className="text-xs font-semibold text-blue-500">
          Ver todas
        </a>
        <div id="Chevron" className="text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Grid;
