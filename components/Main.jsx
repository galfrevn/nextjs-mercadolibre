import React from "react";
import Slider from "./Slider";
import Cart from './Cart'
import BottomAd from "./BottomAd";

function Main() {
  return (
    <div className="pb-20 bg-[#ebebeb]">
      <Slider />

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

      <div className="px-3 bg-[#ebebeb] ">
        <div className="bg-white p-3 rounded-t-md border-b" >
          <h2 className="font-semibold">Ofertas</h2>
        </div>

        <Cart image="https://http2.mlstatic.com/D_Q_NP_2X_677202-MLA40176282059_122019-G.webp" name="Aire acondicionado Sanyo Split Inverter Frío/calor 2838 Frigorias..." />
        <Cart image="https://http2.mlstatic.com/D_Q_NP_2X_761429-MLA47845664019_102021-G.webp" name="Smart Tv Bgh B5021uh6a Led 4k 50  220v Youtube Netflix Spotify " />
        <Cart image="https://http2.mlstatic.com/D_Q_NP_2X_867853-MLA47355614698_092021-T.webp" name="Bicicleta Nordic X1.0 By Slp R29 21v Disco + Suspension nueva y verificada por IMAI" />
        <Cart image="https://http2.mlstatic.com/D_Q_NP_2X_645779-MLA47735810698_102021-T.webp" name="Zapatillas Strong Pace Iii Topper Team Sport Tienda Oficial + Garantia oficial" />

      </div>

      <BottomAd />

    </div>
  );
}

export default Main;
