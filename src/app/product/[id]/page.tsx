import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div>
      <div className="relative">
        <Image
          objectFit="contain"
          layout="fill"
          alt="Product-Image"
          src={"/p1.png"}
        />
      </div>
      <div>
        <h1 className="text-4xl">Sicilian</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          iusto provident laboriosam, maxime dignissimos fuga alias hic
          quibusdam soluta harum, beatae optio delectus sed mollitia quidem
          nostrum. Sunt, obcaecati sequi.
        </p>
      </div>
    </div>
  );
};

export default SingleProductPage;
