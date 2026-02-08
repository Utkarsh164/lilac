import Image from "next/image";
import React from "react";

const Card = ({ content }) => {
  return (
    <div
      className="
      border border-green-900
      bg-[#e6e1d9]
      flex flex-col
      p-6
      max-w-sm
      mx-auto
    "
    >
      <h2 className="font-semibold text-green-900 text-xl mb-4 text-left">
        {content.title}
      </h2>
      <p className="text-green-900 leading-relaxed mb-8">
        {content.description}
      </p>
      <div className="mt-auto flex justify-center">
        <div className="relative w-52 h-52">
          <Image
            src={content.imgUrl}
            alt={content.title}
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 640px) 208px, 208px"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
