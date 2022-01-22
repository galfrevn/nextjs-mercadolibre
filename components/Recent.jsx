import React from "react";
import Cart from "./Cart";
import LGCarrousel from "./LGCarrousel";

function Recent() {
  return (
    <>
      <div className="lg:hidden">
        <div className="px-3 bg-[#ebebeb] mb-6">
          <div className="bg-white p-3 rounded-t-md border-b">
            <h2 className="font-semibold">Inspirado en lo último que viste</h2>
          </div>

          <Cart
            image="https://http2.mlstatic.com/D_Q_NP_2X_677202-MLA40176282059_122019-G.webp"
            name="Aire acondicionado Sanyo Split Inverter Frío/calor 2838 Frigorias..."
          />
          <Cart
            image="https://http2.mlstatic.com/D_Q_NP_2X_761429-MLA47845664019_102021-G.webp"
            name="Smart Tv Bgh B5021uh6a Led 4k 50  220v Youtube Netflix Spotify "
          />
          <Cart
            image="https://http2.mlstatic.com/D_Q_NP_2X_867853-MLA47355614698_092021-T.webp"
            name="Bicicleta Nordic X1.0 By Slp R29 21v Disco + Suspension nueva y verificada por IMAI"
          />
          <Cart
            image="https://http2.mlstatic.com/D_Q_NP_2X_645779-MLA47735810698_102021-T.webp"
            name="Zapatillas Strong Pace Iii Topper Team Sport Tienda Oficial y Garantia oficial Topper"
          />

          <div className="bg-white p-3 rounded-b-md border-b flex justify-between shadow-sm">
            <a href="#" className="text-xs font-semibold text-blue-500">
              Ver más
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
      </div>

      <div className="hidden lg:block">
        <div className="max-w-[1200px] mx-auto">
          <LGCarrousel
            text="Basado en tu última visita"
            secondText="Ver historial"
          />
        </div>
      </div>
    </>
  );
}

export default Recent;
