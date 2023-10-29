import React from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { menuData } from "@/components/data";
import Link from "next/link";

const raleway = Raleway({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});
const MenuPage = () => {
  function shortenText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  }
  return (
    <section className={raleway.className}>
      <div
        className="mt-5 mb-8 md:mt-0 px-8 flex flex-col md:flex-row 
      justify-center items-center h-[90vh]  "
      >
        {menuData.map((menu, id) => (
          <Link
            href={`/menu/${menu.slug}`}
            key={id}
            className="bg-green-700 relative w-full h-[400px] "
          >
            <Image
              objectFit="cover"
              layout="fill"
              alt="Italia"
              src={menu.img}
            />
            <div className={` text-${menu.color} absolute top-5 left-10`}>
              <h2 className="uppercase text-4xl md:text-3xl mb-5 font-bold">
                {menu.title}
              </h2>
              <div>
                <p className="md:text-2xl text-left text-base ">
                  {shortenText(menu.desc, 153)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
