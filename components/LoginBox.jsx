import Link from "next/link";
import React from "react";

function LoginBox() {
  return (
    <div className="px-2 max-w-[1200px] mx-auto lg:mb-6">
      <div className="bg-white p-4 rounded-md shadow-sm">
        <p className="font-semibold">
          ¡Ingresá a tu cuenta y mejorá tu experiencia!
        </p>
        <Link href="/login">
          <button className="bg-[#3483fa] w-full mt-3.5 p-3.5 rounded-md text-sm  text-white">
            Ingresá a tu cuenta
          </button>
        </Link>
        <div className="text-sm flex justify-center mt-5 mb-2">
          <p>
            ¿Sos nuevo?{" "}
            <Link href="/login">
              <a className="text-blue-500">Creá una cuenta</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
