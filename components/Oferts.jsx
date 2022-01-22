import React from "react";
import Cart from "./Cart";
import LGCarrousel from "./LGCarrousel";

function Oferts({ text }) {
  return (
    <>
      <div className="hidden lg:block">
        <div className="max-w-[1200px] mx-auto ">
          <LGCarrousel text={text} secondText="Ver todas" />
        </div>
      </div>

      <div className="px-3 bg-[#ebebeb] mb-6 mt-6 max-w-[1200px] mx-auto lg:hidden">
        <div className="bg-white p-3 rounded-t-md border-b ">
          <h2 className="font-semibold">{text}</h2>
        </div>

        <Cart
          image="https://http2.mlstatic.com/D_Q_NP_2X_937192-MLA32686670051_102019-G.webp"
          name="Zonazero Mochilas Jansport Cool Student Originales (Lona mejor calidad)"
        />
        <Cart
          image="https://http2.mlstatic.com/D_Q_NP_2X_772715-MLA40154584256_122019-G.webp"
          name="Auriculares inalámbricos Skullcandy Crusher Wireless gray y orange "
        />
        <Cart
          image="https://http2.mlstatic.com/D_Q_NP_2X_855963-MLA40373328806_012020-G.webp"
          name="Drone Daming DM107S con cámara FullHD black + Cargador y bateria"
        />
        <Cart
          image="https://http2.mlstatic.com/D_Q_NP_2X_935143-MLA44708329566_012021-G.webp"
          name="Samsung Galaxy XCover Pro 64 GB negro 4 GB RAM 25Mpx/8Mpx 4050mAh"
        />

        <div className="bg-white p-3 rounded-b-md border-b flex justify-between shadow-sm">
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
    </>
  );
}

export default Oferts;
