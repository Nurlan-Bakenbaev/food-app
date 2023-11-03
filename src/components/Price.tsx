import React from "react";
type Props = {
  data: {
    price: number;
    options: { size: string }[];
  };
};
const Price = ({ data }: Props) => {
  console.log(data);
  const Pizzass = data;
  return (
    <div className="mt-8">
      <span className="text-3xl  ">${data.price}</span>
      <div className="flex m-5 gap-8 justify-between ">
        {data.options.map((item, id: number) => (
          <button
            className="hover:bg-red-500
            transition-color 
            duration-300 ease-in
             hover:text-white
             outline px-4 py-2 rounded"
            key={id}
          >
            {" "}
            {item.size}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg px-4 py-2 flex items-center justify-between">
        <div className="flex justify-between gap-12">
          <span>Quantity</span>
          <span> 1 </span>
        </div>
        <button className="bg-red-500 text-white px-3 py-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default Price;
