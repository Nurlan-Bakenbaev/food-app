import Image from "next/image";
import React from "react";
import { FeaturedProducts } from "@/components/data";

const SingleProductPage = () => {
  return (
    <div className="mt-5 mb-10 text-red-500 px-5 h-screen gap-5 items-center justify-center flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center">
        <Image
          width={400}
          height={380}
          alt="Product-Image"
          src={FeaturedProducts[2].photo}
          className="spin"
        />
      </div>
      <div className="flex-1 font-medium">
        <h1 className="text-4xl mb-5 font-semibold">
          {FeaturedProducts[2].name}
        </h1>
        <p>{FeaturedProducts[1].fulldesc}</p>
        <h3 className="text-3xl mt-3 font-semibold">
          ${FeaturedProducts[1].price}
        </h3>
      </div>
    </div>
  );
};

export default SingleProductPage;
