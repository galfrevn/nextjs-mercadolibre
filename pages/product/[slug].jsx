import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import ProductPage from "../../components/ProductPage";

function Product() {
  return (
    <div className="bg-white h-screen">
      <Head>
        <title>Mercado Libre Clone - Producto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <main>
        <Header />
        <ProductPage/>
        
      </main>
    </div>
  );
}

export default Product;