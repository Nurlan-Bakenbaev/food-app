import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PizzaCard({ item }) {
  return (
    <div
      className="bg-white
    transition duration-400 
    px-3 py-3 mt-4 relative border-2
     border-gray-100 h-[500px] w-[350px] 
     drop-shadow-xl group"
    >
      <div
        className="relative w-full h-3/5 
      group-hover:transform
       group-hover:scale-110  duration-500
       transition-transform"
      >
        <Image
          className="transition duration-200 p-4 hover:drop-shadow-2xl"
          layout="fill"
          objectFit="contain"
          alt="Product-image"
          src={item.photo}
        />
      </div>
      <div className="text-center text-red-500 flex flex-col gap-3">
        <h2 className="text-2xl mt-2 font-semibold ">{item.name}</h2>
        <p className="text-center ">{item.description}</p>
        <p className="font-bold text-xl">${item.price}</p>
        <Link href={"/cart"}>
          <button className="px-3 py-1 rounded-lg text-white bg-blue-600">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}
