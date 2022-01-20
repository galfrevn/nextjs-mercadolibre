import React from "react";

function Cart({ image, name }) {
  return (
    <div className="flex bg-white px-2 border-b">
      <div className="pr-2">
        <img src={image} alt="" className="w-30 h-30 object-center" />
      </div>
      <div className="flex flex-col py-4 justify-center ">
        <div className="space-y-1">
          <p className="text-xs">{name} </p>
          <div className="flex items-center">
            <p className="font-md">$7000</p>
            <p className="text-xs ml-2 text-green-600" >26% OFF</p>
          </div>
          <p className="text-green-600 text-xs">18x $3500 sin interes</p>
        </div>
        <p className="text-green-600 text-xs font-semibold">Envio gratis</p>
      </div>
    </div>
  );
}

export default Cart;
