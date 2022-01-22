import React from "react";

function Level6Cart() {
  return (
    <div className="max-w-[1200px] mx-auto px-3 pb-3" >
      {/* Top */}
      <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-3 lg:px-5 rounded-t-md ">
        <div className="flex justify-between">
          <div className="w-1/3 flex items-center">
            <h2 className="font-semibold text-lg lg:text-2xl text-white">
              Suscribite al nivel 6
            </h2>
          </div>
          <div className="text-xs lg:text-sm text-white -space-y-1 border-l-2 pl-2 ">
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
      <div className="bg-white py-3 lg:py-6 px-4 lg:px-5 border-b">
        <p className="text-xs w-3/4 lg:text-sm">
          Conseguí los mejores beneficios en Mercado Libre y Mercado Pago
        </p>

        <div className="flex flex-col lg:grid lg:grid-cols-3">
          <div className="flex items-center justify-start mt-6">
            <div className="flex items-center">
              <img
                className="w-12 lg:w-20 lg:p-1 lg:border lg:rounded-full"
                src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/d+.svg"
                alt=""
              />
            </div>
            <p className="ml-3.5 text-xs lg:text-sm">Disney+ sin cargo</p>
          </div>

          <div className="flex items-center mt-6">
            <div className="flex items-center">
              <img
                className="w-12 lg:w-20 lg:p-1 lg:border lg:rounded-full "
                src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/star+.svg"
                alt=""
              />
            </div>
            <p className="ml-3.5 text-xs lg:text-sm">Star+ sin cargo</p>
          </div>

          <div className="flex items-center mt-6">
            <div className="flex items-center">
              <img
                className="w-12 lg:w-20 lg:p-1 lg:border lg:rounded-full"
                src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png"
                alt=""
              />
            </div>
            <p className="ml-4 text-xs lg:text-sm">
              Envíos gratis desde $ 3.500
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white p-3 rounded-b-md border-b flex justify-between shadow-sm">
        <a href="#" className="text-xs font-semibold text-blue-500 lg:hidden">
          Suscribite
        </a>
        <div id="Chevron" className="text-blue-500 lg:hidden">
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
        <div className="lg:flex w-full hidden justify-end px-5 "  >
          <button className="bg-blue-500 text-sm font-medium px-6 py-3 rounded-md text-white" >
            Suscribite
          </button>
        </div>
      </div>
    </div>
  );
}

export default Level6Cart;
