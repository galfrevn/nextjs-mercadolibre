import { StarIcon as FilledStar } from "@heroicons/react/solid";
import React from "react";
import ProductSlider from "./ProductSlider";
import BottomAd from "./BottomAd";
import { TruckIcon } from "@heroicons/react/outline";

function ProductPage() {
  return (
    <>
      <div className="px-4 mt-5 pb-10">
        {/* Top */}
        <div className="flex flex-col space-y-2">
          <p className="text-xs text-gray-400">Nuevo | 295 vendidos</p>
          <p className="text-sm text-gray-900 pr-10">
            Samsung Galaxy XCover Pro 64 GB negro 4 GB RAM
          </p>
          <div className="w-full text-blue-500 flex pt-1">
            <FilledStar className="w-3" />
            <FilledStar className="w-3" />
            <FilledStar className="w-3" />
            <FilledStar className="w-3" />
            <FilledStar className="w-3 text-gray-200" />
            <p className="text-gray-400 text-xs ml-3">24 Opiniones</p>
          </div>
        </div>

        {/* Slider */}
        <ProductSlider />

        {/* Price & Info */}
        <div>
          <p className="text-3xl font-light">$ 54.990</p>
          <p>
            en 12x $ 7.798 <sup className="text-[10px] ">07</sup>
          </p>
          <p className="mt-5 text-xs text-blue-500">Ver los medios de pago</p>
        </div>

        {/* Shipping */}
        <div className="mt-5 flex items-start space-x-3">
          <TruckIcon className="w-6 text-green-600" />
          <div className="flex flex-col">
            <p className="text-sm text-green-600">
              Envios grátis a todo el país
            </p>
            <p className="text-sm text-gray-500">
              Conocé los tiempos y las formas de envío
            </p>
            <div className="flex">
              <div id="Marker" className="mt-[2px] mr-1 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 lg:h-6 lg:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-sm text-blue-500">Calcular cuándo llega</p>
            </div>
          </div>
        </div>

        {/* Seller */}
        <p className="mt-6 text-xs">
          Vendido por{" "}
          <a href="#" className="text-blue-500">
            Valentín Galfré
          </a>
        </p>
        <p className="text-xs text-gray-600">67 Ventas</p>

        {/* Buy Button */}
        <p className="mt-6 text-md text-gray-800 font-medium">¡Última disponible!</p>

        <div className="flex flex-col space-y-2 mt-8" >
          <button className="bg-blue-500 text-white font-medium text-sm rounded-md py-3.5 " >Comprar ahora</button>
          <button className="bg-blue-50 text-blue-500 font-medium text-sm rounded-md py-3.5 " >Agregar al carrito</button>
        </div>



      </div>
      <BottomAd />

    </>
  );
}

export default ProductPage;
