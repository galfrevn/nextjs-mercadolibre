import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <div className="bg-[#ebebeb] max-w-[1600px] mx-auto " >
      
      <div className="h-full lg:hidden" >
      <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} >
        <div>
          <img className=" object-cover" src="https://http2.mlstatic.com/D_NQ_787816-MLA48831545533_012022-F.webp" />
        </div>
        <div >
          <img className=" object-cover" src="https://http2.mlstatic.com/D_NQ_767873-MLA48821892643_012022-F.webp" />
        </div>
        <div>
          <img className=" object-cover" src="https://http2.mlstatic.com/D_NQ_619713-MLA48811790164_012022-F.webp" />
        </div>
        <div>
          <img className=" object-cover" src="https://http2.mlstatic.com/D_NQ_822422-MLA48870416778_012022-F.webp" />
        </div>
      </Carousel>
      </div>

      <div className="h-full lg:inline-block hidden" >
      <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} >
        <div>
          <img className=" object-cover" src="https://http2.mlstatic.com/D_NQ_935561-MLA48831545527_012022-OO.webp" />
        </div>
        <div >
          <img className=" object-cover" src="https://http2.mlstatic.com/D_NQ_882727-MLA48892822738_012022-OO.webp" />
        </div>
        <div>
          <img className=" object-cover" src="https://http2.mlstatic.com/D_NQ_648496-MLA48872894001_012022-OO.webp" />
        </div>
        <div>
          <img className=" object-cover" src="https://http2.mlstatic.com/D_NQ_779283-MLA48859314272_012022-OO.webp" />
        </div>
      </Carousel>
      </div>
    </div>
  );
}

export default Slider;
