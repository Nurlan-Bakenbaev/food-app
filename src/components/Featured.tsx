import React from "react";
import PizzaCard from "./PizzaCard";
import { FeaturedProducts } from "./data";
const Featured = () => {
  console.log(FeaturedProducts);
  return (
    <div className="overflow-x-scroll ">
      <div className="w-max">
        <div className="flex  gap-2 ">
          {FeaturedProducts.map((item) => (
            <PizzaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
