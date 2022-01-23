import React from "react";

function login() {
  return (
    <div className="relative h-screen">
      
      {/* Header */}
      <header className="bg-[#ffe600] p-2">
        <img
          className="w-11"
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.5/mercadolibre/logo__small@2x.png"
          alt=""
        />
      </header>

      {/* Form */}
      <div className="px-6 mt-7">
        <div>
          <p className="text-lg font-semibold">
            ¡Hola! para seguir, ingresá tu teléfono, e-mail o usuario
          </p>
        </div>

        <div className="mt-8">
          <p className="text-xs mb-2"> Teléfono, e-mail o usuario</p>
          <input
            type="text"
            className="border w-full rounded-md p-3 shadow-sm "
          />
        </div>

        <div className="mt-8">
          <button className="bg-blue-500 text-white w-full font-medium text-sm rounded-md py-3.5 ">
            Continuar
          </button>
          <button className="text-blue-500 font-medium w-full text-sm p-3">
            Crear cuenta
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 px-6 left-0 w-full justify-center items-center ">
        <div className="flex flex-col justify-center items-center pb-7 border-b">
          <button className="bg-[#f5f5f5] text-blue-500 font-medium text-sm w-full rounded-md py-3.5 ">
            Necesito ayuda para ingresar
          </button>
          <p className="text-[10px] mt-3 text-gray-500 ">
            Protegido por reCAPTCHA -{" "}
            <a className="text-blue-500" href="#">
              Privacidad - Condiciones
            </a>
          </p>
        </div>
        <div className="py-4 flex flex-col justify-center items-center space-y-1" >
          <p className="text-xs" >Cómo cuidamos tu privacidad</p>
          <p className="text-xs text-gray-500" >Copyright © 1999-2022 MercadoLibre S.R.L.</p>
        </div>


      </div>

    </div>
  );
}

export default login;
