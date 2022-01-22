import React from "react";

function Discover() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 mb-8">
      <div className="pt-7 mb-5 items-center hidden lg:flex space-x-5">
        <p className="text-xl text-gray-500">Descubrí </p>
      </div>

      <div className="hidden md:grid gap-4 grid-cols-2">
        <div className="w-full h-[250px] bg-white flex items-center relative">
          <div className="absolute left-10 z-40" >
            <p className="text-gray-600 tracking-widest text-sm">
              SEGUÍ CUIDANDOTE
            </p>
            <p className="text-2xl text-gray-700 font-semibold w-10 my-3 ">
              ENVÍOS GRATIS
            </p>
            <button className="bg-blue-500 text-white text-sm font-medium px-6 py-3 rounded-sm">
              Ver mas
            </button>
          </div>
          <img
            className="absolute right-0 h-full"
            src="https://http2.mlstatic.com/D_NQ_750094-MLA48821056598_012022-C.webp"
            alt=""
          />
        </div>
        <div className="w-full h-[250px] bg-white flex items-center relative">
          <div className="absolute left-10 z-40" >
            <p className="text-gray-600 tracking-widest text-sm">
              ESPECIAL ELECTRO
            </p>
            <p className="text-2xl text-gray-700 font-semibold w-72 my-3 ">
              HASTA 20% OFF 
              <br/>
              Y 18X SIN INTERÉS
            </p>
            <button className="bg-blue-500 text-white text-sm font-medium px-6 py-3 rounded-sm">
              Ver mas
            </button>
          </div>
          <img
            className="absolute right-0 h-full"
            src="https://http2.mlstatic.com/D_NQ_720461-MLA48859428502_012022-C.webp"
            alt=""
          />
        </div>
      </div>

      <div className="md:hidden px-1 bg-[#ebebeb] mb-6 mt-6 ">
        <div className="bg-white p-5 rounded-md flex h-[190px] relative shadow-sm overflow-hidden">
          <div className="flex flex-col">
            <p className="text-[10px] text-gray-700 tracking-widest">
              SEGUÍ CUIDANDOTE
            </p>
            <p className="font-semibold text-lg mt-2 w-10">ENVÍOS GRATIS</p>
          </div>
          <p className="text-sm text-blue-600 absolute bottom-5">Ver más</p>
          <img
            className="absolute right-0 bottom-0 rounded-md w-[150px] "
            src="https://http2.mlstatic.com/D_NQ_788329-MLA48821175271_012022-C.webp"
            alt=""
          />
        </div>

        <div className="bg-white p-5 rounded-md flex h-[190px] relative shadow-sm overflow-hidden mt-3">
          <div className="flex flex-col">
            <p className="text-[10px] text-gray-700 tracking-widest">
              ESPECIAL ELECTRO
            </p>
            <p className="font-semibold text-lg mt-2 w-40 leading-6 ">
              HASTA 20% OFF Y 18x SIN INTERÉS
            </p>
          </div>
          <p className="text-sm text-blue-600 absolute bottom-5">Ver más</p>
          <img
            className="absolute right-0 bottom-0 rounded-md w-[150px] "
            src="https://http2.mlstatic.com/D_NQ_720461-MLA48859428502_012022-C.webp"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}

export default Discover;
