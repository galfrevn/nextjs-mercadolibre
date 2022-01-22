import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const products = [
  {
    name: "Conseguí acá los mejores beneficios",
    text2: "Suscribiéndote al nivel 6",
    img1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget/disney-nivel6-mla-mco-mlm@2x.png",
    img2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/comboplus-brand.png?v=1",
  },
  {
    name: "Hasta 50% OFF",
    text2: "HBO Max",
    text3: '7 días gratis',
    img1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/hbo-max-mla-mco-mlc@2x.jpg",
    img2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
  },
  {
    name: "Hasta 40% OFF",
    text2: "Paramount+",
    text3: '7 días gratis',
    img1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/widget/paramount-widget-mla@2x.jpg",
    img2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png",
  },
  {
    name: "Descuento por tu nivel de Mercado Puntos",
    text2: "Disney+",
    img1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney-widget-mco-mla-image-v3@2x.png",
    img2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/comboplus-brand.png?v=1",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
};

function PointsCarrousel({ text, secondText }) {
  return (
    <div className="bg-[#ebebeb]">
      <div className="px-3 pt-7 flex items-center space-x-5">
        <p className="text-xl text-gray-500">{text} </p>
        <a href="#" className="text-blue-500 text-sm">
          {secondText}
        </a>
      </div>

      <div className="px-3 pt-5 pb-16">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          ssr={true}
        >
          {products.map((product, index) => (
            <div className="w-full h-[250px] rounded-md cursor-pointer relative" key={index}>
              <div className="mr-3">
                <img className="h-[250px] w-full object-cover rounded-md" src={product.img1} alt="" />
                <div className="absolute z-20 left-3 bottom-3">
                  <div className="flex" >
                    <img className="w-[80px] h-[80px]  rounded-md" src={product.img2} alt="" />
                    <div className="ml-3 flex-col flex text-white" >
                      {product.text3 ? ( <p className="text-xs mt-3 font-medium uppercase"  >{product.text3}</p> ) : ''}
                      <p className="text-xl font-medium w-50" >{product.name} </p>
                      <p className="text-sm mt-1" >{product.text2}  </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default PointsCarrousel;
