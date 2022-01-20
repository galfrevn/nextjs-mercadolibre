import React from "react";
import Slider from "./Slider";
import Cart from "./Cart";
import BottomAd from "./BottomAd";

function Main() {
  return (
    <div className="pb-20 bg-[#ebebeb]">
      <Slider />

      {/* Banner tarjeta */}
      <div className="bg-white py-5 flex justify-center items-center border-y mb-5">
        <div className="flex justify-center items-center">
          <img
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
            alt=""
          />
          <div className="ml-4">
            <p className="text-sm">Hasta 6 cuotas sin interés</p>
            <a className="text-xs text-blue-600" href="#">
              Ver promociones bancarias
            </a>
          </div>
        </div>
      </div>

      {/* Recientes */}
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
          name="Zapatillas Strong Pace Iii Topper Team Sport Tienda Oficial + Garantia oficial"
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

      {/* Log in Box */}
      <div className="px-3">
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="font-semibold">
            ¡Ingresá a tu cuenta y mejorá tu experiencia!
          </p>
          <button className="bg-[#3483fa] w-full mt-3.5 p-3.5 rounded-md text-sm  text-white" >
            Ingresá a tu cuenta
          </button>
          <div className="text-sm flex justify-center mt-5 mb-2" >
            <p>¿Sos nuevo? <a className="text-blue-500" href="#">Creá una cuenta</a></p>
          </div>
        </div>
      </div>

      {/* Ofertas */}
      <div className="px-3 bg-[#ebebeb] mb-6 mt-6 ">
        <div className="bg-white p-3 rounded-t-md border-b">
          <h2 className="font-semibold">Ofertas</h2>
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

      {/* Niveles */}
      <div className="px-3 bg-[#ebebeb] mb-6 mt-6 " >

      </div>
    
      {/* Anuncio Inferior */}
      <BottomAd />
    </div>
  );
}

export default Main;
