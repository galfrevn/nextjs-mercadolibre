import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ShareIcon } from "@heroicons/react/outline";

function ProductSlider() {
  return (
    <div className="mt-6 mb-24 relative" >
      <Carousel infiniteLoop={true} showThumbs={false} renderIndicator={false} >
        <div>
          <img
            className=" object-contain w-[260px] h-[260px]"
            src="https://http2.mlstatic.com/D_NQ_NP_935143-MLA44708329566_012021-O.webp"
          />
        </div>
        <div>
          <img
            className=" object-contain w-[260px] h-[260px]"
            src="https://http2.mlstatic.com/D_NQ_NP_902769-MLA44708216700_012021-O.webp"
          />
        </div>
        <div>
          <img
            className=" object-contain w-[260px] h-[260px]"
            src="https://http2.mlstatic.com/D_NQ_NP_746243-MLA44708329568_012021-O.webp"
          />
        </div>
        <div>
          <img
            className=" object-contain w-[260px] h-[260px]"
            src="https://http2.mlstatic.com/D_NQ_NP_977416-MLA44708216699_012021-O.webp"
          />
        </div>
        <div>
          <img
            className=" object-contain w-[260px] h-[260px]"
            src="https://http2.mlstatic.com/D_NQ_NP_849637-MLA44708216698_012021-O.webp"
          />
        </div>
      </Carousel>
      <div className="absolute -bottom-5 right-0" >
        <div className="bg-gray-50 p-3 rounded-full" > 
          <ShareIcon className="w-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;
