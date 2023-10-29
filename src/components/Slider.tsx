"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import image1 from "../../public/images/oranges.jpg";
import image2 from "../../public/images/pancakes.jpg";
import image3 from "../../public/images/pizza.jpg";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy and hot",
    image: image3,
  },
  {
    id: 2,
    title: "Food is the Ingredient That Binds Us Together",
    image: image1,
  },
  {
    id: 3,
    title: "Eating is a Necessity, But Cooking is an Art",
    image: image2,
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[90vh] flex flex-col md:flex-row ">
      <div
        className="text-center px-8 flex-1 flex gap-4 flex-col 
      justify-center items-center "
      >
        <h1
          className="uppercase text-4xl 
        md:text-5xl lg:text-6xl text-red-500 
        drop-shadow-lg font-semibold"
        >
          {data[currentSlide].title}
        </h1>
        <Link
          href={"/order"}
          className="bg-red-500
           hover:bg-blue-500 
          transition duration-500
           text-white rounded-lg
            p-2 px-3 hover:drop-shadow-lg "
        >
          Order Now
        </Link>
      </div>
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <Image
            layout="fill"
            objectFit="cover"
            alt="Data-Image"
            src={data[currentSlide].image}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
