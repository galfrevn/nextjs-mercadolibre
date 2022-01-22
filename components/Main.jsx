import React from "react";
import Slider from "./Slider";
import BottomAd from "./BottomAd";
import Footer from "./Footer";
import Level6Cart from "./Level6Cart";
import Banner from './Banner'
import Recent from "./Recent";
import LoginBox from './LoginBox'
import Oferts from './Oferts'
import MercadoPuntos from './MercadoPuntos'
import Discover from './Discover'
import Grid from './Grid'

function Main() {
  return (
    <div className="bg-[#ebebeb]">
      {/* Main Slider */}
      <Slider />

      {/* Banner tarjeta */}
      <Banner />

      {/* Recientes */}
      <Recent />

      {/* Log in Box */}
      <LoginBox />

      {/* Ofertas */}
      <Oferts text='Ofertas' />

      {/* Niveles */}
      <div className="bg-[#ebebeb] mb-6 mt-6 ">
        <Level6Cart />
      </div>

      {/* Mercado puntos */}
      <MercadoPuntos />
      

      {/* Categories */}
      <Discover /> 

      {/* Grid */}
      <Grid />

      {/* More Oferts */ }
      <Oferts text='También puede interesarte' />

      {/* Footer */}
      <Footer />

      {/* Anuncio Inferior */}
      <BottomAd />
    </div>
  );
}

export default Main;
