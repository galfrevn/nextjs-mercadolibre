import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Oferts from "../components/Oferts";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function cart() {
  let [categories] = useState({
    Carrito: [
      {
        id: 1,
        title: "Tu carrito está vacío",
        date: "¿No sabés qué comprar? ¡Miles de productos te esperan! ",
        link: "Comienza a llenarlo ahora",
      },
    ],
    Guardados: [
      {
        id: 1,
        title: "No tenés productos guardados",
        date: "Si aún no estás decidido en comprar algún producto de tu carrito, podés dejarlo aquí.",
        link: "",
      },
    ],
  });

  return (
    <div className="bg-[#ebebeb] h-screen">
      <Header />

      <div className="">
        <Tab.Group>
          <Tab.List className="flex">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-screen relative py-2.5 text-sm leading-5 font-medium text-black bg-[#ffe600] ",
                    "",
                    selected
                      ? "after:absolute after:w-full after:h-[2px] after:left-0 after:-bottom-[2px] after:bg-black"
                      : ""
                  )
                }
              >
                {category} (0)
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="h-[calc(100vh-14rem)]  flex bg-[#ebebeb] justify-center items-center text-center px-3">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel key={idx} className={classNames("", "")}>
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 rounded-md hover:bg-coolGray-100"
                    >
                      <h3 className="text-gray-600 text-xl">{post.title}</h3>

                      <ul className="flex mt-3 space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>
                          <p>
                            {post.date}
                            <a href="/" className="text-blue-500">
                              {post.link}
                            </a>
                          </p>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="bg-[#ebebeb]">
        <div className="">
          <Oferts text="Productos que te interesaron" />
        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default cart;
