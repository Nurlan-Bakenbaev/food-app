import React from "react";
import { FeaturedProducts } from "@/components/data";
import Image from "next/image";
const CategoryPage = () => {
  console.log(FeaturedProducts);
  return (
    <div className="flex flex-row flex-wrap gap-1 ">
      {FeaturedProducts.map((item, id) => (
        <div
          className=" cursorr bg-white even:bg-blue border-1 border-pink-100"
          key={id}
        >
          <div className="relative w-[300px] h-[200px]">
            <Image
              layout="fill"
              objectFit="contain"
              alt="Product-image"
              src={item.photo}
            />
          </div>
          <div className="text-center">
            <h2>{item.name}</h2>
            <span>${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
