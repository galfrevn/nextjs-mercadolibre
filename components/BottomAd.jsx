import React from "react";

function handleDestroy() {
  const mainAd = document.getElementById("ad");
  mainAd.classList.add("hidden");
}

function BottomAd() {
  return (
    <div id="ad" className="fixed bottom-0 left-0 w-screen bg-white border-t">
      <div className="p-4 space-y-4">
        <div>
          <h2 className="font-semibold font-gray-900">
            Bajá la app y comprá más fácil y rápido.
          </h2>
        </div>
        <div className="flex justify-around space-x-4">
          <button className="w-full text-xs font-semibold py-2 text-[#3483fa] bg-[#4189e626] rounded-lg" onClick={handleDestroy}  >Ahora no</button>
          <button className="w-full text-xs py-2 bg-[#ffd100] rounded-lg" onClick={handleDestroy} >
            <div className="flex justify-center items-center" >
              <img className="w-7 mr-2" src="/images/logo.png" alt="" />
              <p>Bajar</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomAd;
