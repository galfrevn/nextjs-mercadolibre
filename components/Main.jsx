import React from "react";
import Slider from "./Slider";
import Cart from "./Cart";
import BottomAd from "./BottomAd";
import Benefy from "./Benefy";

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

      {/* Log in Box */}
      <div className="px-3">
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="font-semibold">
            ¡Ingresá a tu cuenta y mejorá tu experiencia!
          </p>
          <button className="bg-[#3483fa] w-full mt-3.5 p-3.5 rounded-md text-sm  text-white">
            Ingresá a tu cuenta
          </button>
          <div className="text-sm flex justify-center mt-5 mb-2">
            <p>
              ¿Sos nuevo?{" "}
              <a className="text-blue-500" href="#">
                Creá una cuenta
              </a>
            </p>
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
      <div className="px-3 bg-[#ebebeb] mb-6 mt-6 ">
        {/* Top */}
        <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-3 rounded-t-md ">
          <div className="flex justify-between">
            <div className="w-1/3">
              <h2 className="font-semibold text-lg text-white">
                Suscribite al nivel 6
              </h2>
            </div>
            <div className="text-xs text-white -space-y-1 border-l-2 pl-2 ">
              <p>Desde</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold">$ 599</p>
                <p className="text-xs font-medium">/mes</p>
              </div>
              <p>Según tu nivel</p>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white py-3 px-4 border-b">
          <p className="text-xs w-3/4">
            Conseguí los mejores beneficios en Mercado Libre y Mercado Pago
          </p>
          <div className="flex flex-col">
            <div className="flex items-center mt-6">
              <div className="w-1/6 flex items-center">
                <img
                  className="w-12"
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/d+.svg"
                  alt=""
                />
              </div>
              <p className="ml-2 text-xs">Disney+ sin cargo</p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-1/6 flex items-center">
                <img
                  className="w-12"
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/star+.svg"
                  alt=""
                />
              </div>
              <p className="ml-2 text-xs">Star+ sin cargo</p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-1/3 flex items-center">
                <img
                  className="w-12 "
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png"
                  alt=""
                />
              </div>
              <p className="ml-1 text-xs">
                Envíos gratis y rápidos desde $ 3.500 y 45% OFF en envíos de
                menos de $ 3.500
              </p>
            </div>
          </div>
        </div>
        {/* Botoom */}
        <div className="bg-white p-3 rounded-b-md border-b flex justify-between shadow-sm">
          <a href="#" className="text-xs font-semibold text-blue-500">
            Suscribite
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

      {/* Mercado puntos */}
      <div className="px-3 bg-[#ebebeb] mb-6 mt-6 ">
        <div className="bg-white p-3 rounded-t-md border-b">
          <h2 className="font-semibold">Beneficios de Mercado Puntos</h2>
        </div>
        <div className="grid gap-2 grid-cols-2 p-4 bg-white border-b">
          {/* Beneficios */}
          <Benefy
            text1="Conseguí acá los mejores beneficios"
            image1="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget/disney-nivel6-mla-mco-mlm@2x.png"
            image2="https://http2.mlstatic.com/resources/frontend/statics/loyal/comboplus-brand.png?v=1"
            text2="Suscribiéndote al nivel 6"
            grad="bg-gradient-to-t from-[#081330] via-[#081330] to-transparent"
          />
          <Benefy
            second="7 DÍAS GRATIS"
            text1="Hasta 50% OFF"
            image1="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/hbo-max-mla-mco-mlc@2x.jpg"
            image2="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1"
            text2="HBO Max"
            grad="bg-gradient-to-t from-[#3c034e] via-[#3c034e] to-transparent"
          />
          <Benefy
            second="7 DÍAS GRATIS"
            text1="Hasta 40% OFF"
            image1="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/widget/paramount-widget-mla@2x.jpg"
            image2="https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png"
            text2="Paramount+"
            grad="bg-gradient-to-t from-[#0064ff] via-[#0064ff] to-transparent"
          />
          <Benefy
            text1="Descuento por tu nivel de Mercado Puntos"
            image1="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney-widget-mco-mla-image-v3@2x.png"
            image2="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/vdp/new-disney-brand@2x.png"
            text2="Disney+"
            grad="bg-gradient-to-t from-[#011947] via-[#011947] to-transparent"
          />
        </div>

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

      {/* Anuncio Inferior */}
      <BottomAd />
    </div>
  );
}

export default Main;
