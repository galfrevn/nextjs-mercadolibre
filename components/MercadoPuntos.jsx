import React from "react";
import Benefy from "./Benefy";
import PointsCarrousel from "./PointsCarrousel";

function MercadoPuntos() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="max-w-[1200px] mx-auto ">
          <PointsCarrousel
            text="Beneficios de Mercado Puntos"
            secondText="Ver todos los beneficios"
          />
        </div>
      </div>

      <div className="px-3 bg-[#ebebeb] mb-6 mt-6 lg:hidden">
        <div className="bg-white p-3 rounded-t-md border-b">
          <h2 className="font-semibold">Beneficios de Mercado Puntos</h2>
        </div>
        <div className="grid gap-2 grid-cols-2 grid-rows-2 p-4 bg-white border-b">
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
            Ver todos los beneficios
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

export default MercadoPuntos;
