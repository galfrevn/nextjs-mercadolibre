import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <div className="bg-[#ebebeb]" >
    <div className="max-w-7xl mx-auto" >
      <Carousel infiniteLoop={true} showThumbs={false} >
        <div>
          <img className="max-h-[338px] object-cover" src="https://http2.mlstatic.com/D_NQ_787816-MLA48831545533_012022-F.webp" />
        </div>
        <div >
          <img className="max-h-[338px] object-cover" src="https://http2.mlstatic.com/D_NQ_767873-MLA48821892643_012022-F.webp" />
        </div>
        <div>
          <img className="max-h-[338px] object-cover" src="https://http2.mlstatic.com/D_NQ_619713-MLA48811790164_012022-F.webp" />
        </div>
        <div>
          <img className="max-h-[338px] object-cover" src="https://http2.mlstatic.com/D_NQ_822422-MLA48870416778_012022-F.webp" />
        </div>
      </Carousel>
    </div>
    </div>
  );
}

export default Slider;
