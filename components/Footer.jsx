import React from "react";

function Footer() {
  return (
    <div className="bg-white">
      <div className="bg-[#ffe600]" >
        <div className="flex justify-center items-center p-4 max-w-[1200px] mx-auto">
          <img
            className="w-10"
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.5/mercadolibre/logo__small@2x.png"
            alt=""
          />
          <p className="ml-4">¡Comprá y vendé con la app!</p>
        </div>
      </div>

      <div className="grid grid-cols-2 px-8 pb-8 pt-3 text-xs text-gray-600 space-y-4 border-b max-w-[1200px] mx-auto">
        <p className="mt-3.5">Mi cuenta</p>
        <p>Historial</p>
        <p>Favoritos</p>
        <p>Categorias</p>
        <p>Ayuda</p>
        <p>Mis compras</p>
        <p>Ofertas</p>
        <p>Tiendas oficiales</p>
        <p>Mercado Puntos</p>
        <p>Vender</p>
      </div>

      <div className="px-8 pt-4 pb-6 max-w-[1200px] mx-auto">
        <div className="flex space-x-4">
          <p className="text-blue-600 text-sm pr-4 border-r">Ingresá</p>
          <p className="text-blue-600 text-sm">Creá tu cuenta</p>
        </div>
      </div>

      <div className="px-8 py-4 text-xs max-w-[1200px] mx-auto">
        <p>
          Terminos y condiciones Como cuidamos tu privacidad Informacion de
          usuario financiero Defensa del Consumidor
        </p>
      </div>

      <div className="px-8 pb-8 max-w-[1200px] mx-auto">
        <p className="text-xs text-gray-400 mb-2">
          © 1999-2022 MercadoLibre S.R.L.
        </p>
        <p className="text-xs text-gray-400">
          Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
        </p>
      </div>
    </div>
  );
}

export default Footer;
