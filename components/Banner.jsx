import React from "react";

function Banner() {
  return (
    <div className="bg-white py-5 lg:mt-9 lg:rounded-md flex justify-center items-center border-y mb-5 max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center lg:grid lg:grid-cols-4 lg:gap-4 lg:grid-rows-1 ">
        <div className="flex justify-center items-center">
          <img
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
            alt=""
          />
          <div className="lg:hidden ml-4">
            <p className="text-sm">Hasta 6 cuotas sin interés</p>
            <a className="text-xs text-blue-600" href="#">
              Ver promociones bancarias
            </a>
          </div>
          <div className="hidden lg:inline-block ml-3">
            <p className="text-sm">Tarjeta de crédito</p>
            <a className="text-xs text-blue-600" href="#">
              Ver promociones bancarias
            </a>
          </div>
        </div>

        <div className="lg:flex hidden justify-center items-center">
          <img
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg"
            alt=""
          />
          <div className="hidden lg:inline-block ml-3">
            <p className="text-sm">Tarjeta de crédito</p>
            <a className="text-xs text-blue-600" href="#">
              Ver más
            </a>
          </div>
        </div>

        <div className="lg:flex hidden justify-center items-center">
          <img
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
            alt=""
          />
          <div className="hidden lg:inline-block ml-3">
            <p className="text-sm">Cuotas sin tarjeta</p>
            <a className="text-xs text-blue-600" href="#">
              Conocé Mercado Crédito
            </a>
          </div>
        </div>

        <div className="lg:flex hidden justify-center items-center ">
          <div className="flex border-r pr-5">
            <img
              src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg"
              alt=""
            />
            <div className="hidden lg:inline-block ml-3">
              <p className="text-sm">Efectivo</p>
              <a className="text-xs text-blue-600" href="#">
                Ver más
              </a>
            </div>
          </div>
          <img
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/view-more.svg"
            className="pl-5 "
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
