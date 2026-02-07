import Image from "next/image";
import React from "react";

const Card = ({ content }) => {
  return (
    <div className="border border-black flex flex-col m-3 p-4 bg-[#e6e1d9] w-full max-w-md">
      <div className="w-full font-semibold text-center p-3 text-left text-2xl">
        <h1>{content.title}</h1>
      </div>
      <div className="mt-3 text-center h-[100px] my-4">
        <p>{content.description}</p>
      </div>
      <div className="h-[300px] w-full flex justify-center items-center">
        <div className="relative h-full aspect-square">
          <Image
            src={content.imgUrl}
            alt="Images"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
