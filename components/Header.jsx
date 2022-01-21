import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  HomeIcon,
  TagIcon,
  ClockIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  SparklesIcon,
  ArchiveIcon,
  MenuAlt1Icon,
  PaperClipIcon,
  DownloadIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Hamburger from "hamburger-react";
import disableScroll from "disable-scroll";

const callsToAction = [
  { name: "Inicio", href: "#", icon: HomeIcon, selected: true },
  { name: "Ofertas", href: "#", icon: TagIcon },
  { name: "Historial", href: "#", icon: ClockIcon },
  { name: "Ayuda", href: "#", icon: InformationCircleIcon },

  { name: "Supermercado", href: "#", icon: ShoppingBagIcon },
  { name: "Moda", href: "#", icon: SparklesIcon },
  { name: "Tiendas oficiales", href: "#", icon: ArchiveIcon },
  { name: "Categorias", href: "#", icon: MenuAlt1Icon },

  { name: "Resumen", href: "#", icon: PaperClipIcon },
  { name: "Vender", href: "#", icon: TagIcon },

  { name: "¡Comprá y vendé con la app!", href: "#", icon: DownloadIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log("Open");
      disableScroll.on();
    } else {
      console.log("Closed");
      disableScroll.off();
    }
  }, [isOpen]);

  return (
    <>
      <div className="bg-[#ffe600]">
        <header className="w-full bg-[#ffe600] sticky top-0 z-50 px-2.5 lg:px-0 py-2 lg:py-2 border-b-[0.1px] border-[#dfcf3e] ">
          <div className="max-w-6xl mx-auto flex justify-between">
            <div className="w-24 lg:w-56 lg:mr-14 lg:-ml-1 lg:overflow-hidden">
              <img
                src="https://jumpseller.cl/images/apps/mercadolibre.jpg"
                className="hidden lg:inline-block"
              />
              <img
                className="w-11 inline-block lg:hidden"
                src="/images/logo.png"
              />
            </div>
            <SearchBar />

            <div>
              <div className="pl-1 flex justify-center items-center space-x-2 lg:hidden">
                <Popover className="">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "flex justify-center items-center"
                        )}
                      >
                        <div className="flex h-8 justify-center items-center ">
                          <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            size={22}
                            color="#85857f"
                          />
                        </div>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-50"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-50"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-4 z-10 -ml-4 mt-2.5 transform w-screen">
                          <div className=" shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
                            <div className="h-20 p-5 ">
                              <div className="flex">
                                <div className="bg-[#ededed] h-full rounded-full p-2 ">
                                  <UserIcon className="w-8 h-8 text-gray-400 " />
                                </div>
                                <div className="flex flex-col ml-4">
                                  <p className="text-sm">Bienvenido</p>
                                  <p className="text-xs text-zinc-400">
                                    Ingresa a tu cuenta para ver tus compras,
                                    favoritos, etc.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between px-5 space-x-1 pb-4 border-b mt-2">
                              <button className="text-xs w-full font-medium text-white bg-blue-500 rounded-md py-3">
                                Ingresá
                              </button>
                              <button className="text-xs w-full font-medium text-blue-500 border border-blue-500 py-3 rounded-md">
                                Creá tu cuenta
                              </button>
                            </div>
                            <div className=" py-7 space-y-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className={
                                      item.selected
                                        ? "-m-3 p-3 px-9 flex items-center text-sm text-blue-600 bg-[#ededed]"
                                        : "-m-3 p-3 px-9 flex items-center text-sm text-gray-900 hover:bg-[#ededed]"
                                    }
                                  >
                                    <item.icon
                                      className={
                                        item.selected
                                          ? "flex-shrink-0 h-5 w-5 text-blue-600"
                                          : "flex-shrink-0 h-5 w-5 text-gray-600"
                                      }
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <div id="Cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden lg:flex justify-center items-center w-72 h-full">
                <p className="text-xs ">
                  Envios gratis en 24 hrs a partir de $3500
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="w-full h-9 bg-[#ffe600] lg:py-0 px-2.5 py-2 shadow-sm max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div className="flex h-full justify-start items-center">
              <div id="Marker" className="text-[#ada23a]">
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
              <p className="pl-2 text-xs text-[#58531e] lg:hidden inline-block ">
                Enviar a Santa Fe
              </p>
              <div className="hidden lg:flex flex-col">
                <p className="text-[8px] ">Enviar a</p>
                <p className="text-xs">Santa Fe, Santo Tomé</p>
              </div>
            </div>
            <div id="Chevron" className="text-[#b8aa35] lg:hidden">
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
            <div className="hidden lg:flex justify-center items-end h-full space-x-4 text-xs">
              <p>Creá tu cuenta</p>
              <p>Ingresá</p>
              <p>Mis compras</p>
              <div id="Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
