import Link from "next/link";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const products = [
  {
    name: "Mochila Cartera Everlast Espalda Dama Anti-robo Urbana Mujer",
    price: '4.800',
    image:
      "https://http2.mlstatic.com/D_Q_NP_855746-MLA48734815841_012022-AB.webp",
    isFree: true,
  },
  {
    name: "Bicicleta Nordic X1.0 By Slp R29 Shim. 21v Freno Disco Susp",
    price: '23.100',
    image:
      "https://http2.mlstatic.com/D_Q_NP_815406-MLA44999050370_022021-AB.webp",
    isFree: true,
  },
  {
    name: "Lavarropas Automático Philco Phlf081 Blanco 8kg 220 v",
    price: '32.510',
    image:
      "https://http2.mlstatic.com/D_Q_NP_872589-MLA47661256215_092021-AB.webp",
    isFree: true,
  },
  {
    name: "Smart Tv Rca And50fxuhd Led 4k 50  100v/240v",
    price: '12.362',
    image:
      "https://http2.mlstatic.com/D_Q_NP_660634-MLA48700484732_122021-AB.webp",
    isFree: true,
  },
  {
    name: "Xiaomi Mi Smart Band 6 1.56 caja de  plástico pc  black, malla  black ",
    price: '5.530',
    image:
      "https://http2.mlstatic.com/D_Q_NP_917772-MLA46164931649_052021-AB.webp",
    isFree: true,
  },
  {
    name: "Mochila Cartera Everlast Espalda Dama Anti-robo Urbana Mujer",
    price: '4.800',
    image:
      "https://http2.mlstatic.com/D_Q_NP_855746-MLA48734815841_012022-AB.webp",
    isFree: true,
  },
  {
    name: "Mochila Cartera Everlast Espalda Dama Anti-robo Urbana Mujer",
    price: '4.800',
    image:
      "https://http2.mlstatic.com/D_Q_NP_855746-MLA48734815841_012022-AB.webp",
    isFree: true,
  },
  {
    name: "Mochila Cartera Everlast Espalda Dama Anti-robo Urbana Mujer",
    price: '4.800',
    image:
      "https://http2.mlstatic.com/D_Q_NP_855746-MLA48734815841_012022-AB.webp",
    isFree: true,
  },
  {
    name: "Mochila Cartera Everlast Espalda Dama Anti-robo Urbana Mujer",
    price: '4.800',
    image:
      "https://http2.mlstatic.com/D_Q_NP_855746-MLA48734815841_012022-AB.webp",
    isFree: true,
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
}

function LGCarrousel({ text, secondText }) {
  return (
    <div className="bg-[#ebebeb]">
      <div className="px-3 pt-7 flex items-center space-x-5">
        <p className="text-xl text-gray-500">{text} </p>
        <a href="#" className="text-blue-500 text-sm">
          {secondText}
        </a>
      </div>

      <div className="pt-5 pb-16">
        <Carousel responsive={responsive} swipeable={true} draggable={false} ssr={true} >
          {products.map((product, index) => (
            <Link href={`/product/${index}`} key={index} >
            <div className="w-[224px] mx-auto bg-white shadow-sm hover:shadow-xl hover:border rounded-md cursor-pointer" >
              <div className="p-3 border-b">
                <img src={product.image} alt="" />
              </div>
              <div className="p-3 text-left">
                <p className="text-xl">$ {product.price}</p>
                <p className="text-green-500 text-xs font-semibold">
                  {product.isFree ? "Envio gratis" : ""}
                </p>
                <p className="text-gray-400 text-xs pt-2 pb-3">
                  {product.name}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </Carousel>
      </div>

    </div>
  );
}

export default LGCarrousel;
