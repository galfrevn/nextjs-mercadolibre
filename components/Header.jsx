import React from "react";
import Image from "next/image";
import SearchBar from "../components/SearchBar";

function Header() {
  return (
    <>
      <header className="w-full bg-[#ffe600] sticky top-0 z-50 px-2.5 py-2 border-b-[0.1px] border-[#dfcf3e] ">
        <div className="max-w-2xl mx-auto flex justify-between">
          <div className="w-24">
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
            <div className="pl-2.5 flex justify-center items-center h-full space-x-4">
              <div id="Menu" className="text-black">
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
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
          </div>
        </div>
      </header>
      <div className="w-full h-9 bg-[#ffe600] px-2.5 py-2 shadow-sm">
        <div className="flex justify-between">
          <div className="flex h-full justify-start items-center">
            <div id="Marker" className="text-[#ada23a]" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
            <p className="pl-2 text-xs text-[#58531e]">Enviar a Santa Fe</p>
          </div>
          <div id="Chevron" className="text-[#b8aa35]" >
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

export default Header;
