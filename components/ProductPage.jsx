import { StarIcon as FilledStar } from "@heroicons/react/solid";
import React from "react";
import ProductSlider from "./ProductSlider";
import BottomAd from "./BottomAd";
import {
  BadgeCheckIcon,
  HeartIcon,
  RewindIcon,
  ShareIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/outline";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function ProductPage() {
  return (
    <>
      <div className="px-4 mt-5 pb-2 border-b">
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
          <div className="flex text-[10px] items-center">
            <p className="bg-orange-500 text-white p-[3px]">MÁS VENDIDO</p>
            <p className="text-blue-500 pl-2">4º en Celulares y Smartphones</p>
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
        <p className="mt-6 text-md text-gray-800 font-medium">
          ¡Última disponible!
        </p>

        <div className="flex flex-col space-y-2 mt-8">
          <button className="bg-blue-500 text-white font-medium text-sm rounded-md py-3.5 ">
            Comprar ahora
          </button>
          <button className="bg-blue-50 text-blue-500 font-medium text-sm rounded-md py-3.5 ">
            Agregar al carrito
          </button>
        </div>

        {/* Benefits */}
        <div className="mt-8 space-y-4">
          <div className="flex space-x-3">
            <RewindIcon className="w-5 mt-[2px] text-gray-500" />
            <div className="flex flex-col h-full justify-center items-start">
              <p className="text-xs text-gray-500">
                <span className="text-blue-500">Devolución gratis</span> Tenés
                30 días desde que lo recibís.
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <ShieldCheckIcon className="w-8 mt-[2px] text-gray-500" />
            <div className="flex flex-col h-full justify-center items-start">
              <p className="text-xs text-gray-500">
                <span className="text-blue-500">Compra Protegida</span>, recibí
                el producto que esperabas o te devolvemos tu dinero.
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <SparklesIcon className="w-5 mt-[2px] text-gray-500" />
            <div className="flex flex-col h-full justify-center items-start">
              <p className="text-xs text-gray-500">
                <span className="text-blue-500">Mercado Puntos</span>. Sumás 549
                puntos.
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <BadgeCheckIcon className="w-5 mt-[2px] text-gray-500" />
            <div className="flex flex-col h-full justify-center items-start">
              <p className="text-xs text-gray-500">
                12 meses de garantía de fábrica.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8 flex justify-center space-x-5 items-center">
          <div className="flex space-x-2 items-center">
            <HeartIcon className="w-5 text-blue-400" />
            <p className="text-xs text-blue-500">Agragar a favoritos</p>
          </div>
          <div className="flex space-x-2 items-center">
            <ShareIcon className="w-5 text-blue-400" />
            <p className="text-xs text-blue-500">Compartir</p>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="py-10 px-4 border-b">
        <div className="bg-white px-3 py-4 rounded-t-lg border">
          <h2 className="text-xs font-semibold">Otras opciones de compra</h2>
        </div>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="border-x border-b flex justify-between w-full px-4 py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span className="text-lg">$ 72.021</span>
                    <p className="ml-[116px] text-[10px] float-right bg-gray-100 rounded-xl px-2">
                      Llega mañana
                    </p>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 transition-all ease-out text-blue-500`}
                    />
                  </Disclosure.Button>

                  <Transition
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm border-x  border-b text-gray-500">
                      <p className="text-xs text-green-600">
                        Pagá en 9 cuotas sin interés
                      </p>
                      <p className="text-xs text-green-600">
                        Envío gratis a todo el país
                      </p>
                      <p className="text-xs mt-3">
                        Vendido por{" "}
                        <a className="text-blue-500" href="#">
                          Valentín Galfré
                        </a>
                      </p>
                      <p className="text-xs">206 ventas</p>
                      <p className="text-xs text-gray-500">Hace factura A</p>
                      <button className="bg-blue-500 mt-5 mb-2 text-white w-full font-medium text-xs rounded-md py-2 ">
                        Comprar ahora
                      </button>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="">
              {({ open }) => (
                <>
                  <Disclosure.Button className="border-x flex justify-between w-full px-4 py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span className="text-lg">$ 62.328</span>
                    <p className="ml-24 text-[10px] float-right bg-gray-100 rounded-xl px-2 ">
                      Cuotas sin interes
                    </p>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 transition-all ease-out text-blue-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Disclosure.Panel className="px-4 border-x border-t pt-4 pb-2 text-sm text-gray-500">
                      <p className="text-xs">Pagá en hasta 12 cuotas</p>
                      <p className="text-xs text-green-600">
                        Envío gratis a todo el país
                      </p>
                      <p className="text-xs mt-3">
                        Vendido por{" "}
                        <a className="text-blue-500" href="#">
                          Valentín Galfré
                        </a>
                      </p>
                      <p className="text-xs">1.899 ventas</p>
                      <p className="text-xs text-gray-500">Hace factura A</p>
                      <button className="bg-blue-500 mt-5 mb-2 text-white w-full font-medium text-xs rounded-md py-2 ">
                        Comprar ahora
                      </button>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className="bg-white px-3 py-4 rounded-b-lg border">
          <h2 className="text-xs text-blue-500">Ver más opciones desde $56.999 </h2>
        </div>
      </div>

      {/* Level 6 */}
      <div className="px-4 py-10 ">
        <div className="bg-white px-3 py-4 rounded-t-lg border">
          <h2 className="text-xs font-semibold">
            Suscribite al nivel 6 de Mercado Puntos
          </h2>
        </div>
        <div className="border-x border-b w-full p-4">
          <img
            className="mt-2"
            src="https://http2.mlstatic.com/D_NQ_NP_723612-MLA48575060873_122021-OO.png"
            alt=""
          />
          <p className="pt-7 text-sm">Ahorrá con los mejores beneficios</p>
          <p className="text-sm pt-2 text-gray-400">
            Suscribite al nivel 6 desde $ 599/mes y ahorrá en envíos,
            suscripciones de contenido, pagos, ¡y mucho más!
          </p>
        </div>
        <div className="bg-white p-4 rounded-b-lg border-b border-x ">
          <button className="bg-blue-50 w-full text-blue-500 font-medium text-xs rounded-md py-2 ">
            Agregar al carrito
          </button>
        </div>
      </div>

      <BottomAd />
    </>
  );
}

export default ProductPage;
