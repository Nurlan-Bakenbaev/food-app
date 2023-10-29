import React from "react";
import { FeaturedProducts } from "@/components/data";
import Image from "next/image";
import Link from "next/link";
const CategoryPage = () => {
  console.log(FeaturedProducts);
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-center mt-5 px-3 text-red-500 font-semibold  uppercase">
      {FeaturedProducts.map((item, id) => (
        <Link href={`/product/${item.name}`}
          className=" bg-white even:bg-blue py-6 group  even:bg-fuchsia-200"
          key={id}
        >
          <div className=" relative cursor-pointer w-[350px] h-[250px] transition-transform transform hover:scale-110">
            <Image
              layout="fill"
              objectFit="contain"
              alt="Product-image"
              src={item.photo}
            />
          </div>
          <div className=" mt-4 flex justify-between px-7">
            <h2 className="text-xl">{item.name}</h2>
            <span>${item.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
