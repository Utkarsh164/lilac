"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ content }) => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".photoDiv", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: cardRef } // 👈 THIS is the key
  );

  return (
    <div
      ref={cardRef}
      className="border border-black flex flex-col m-3 p-4 bg-[#e6e1d9] w-full max-w-md"
    >
      <div className="w-full font-semibold p-3 text-left text-2xl">
        <h1>{content.title}</h1>
      </div>

      <div className="mt-3 text-center h-[100px] my-4">
        <p>{content.description}</p>
      </div>

      <div className="h-[300px] w-full flex justify-center items-center">
        <div className="relative photoDiv h-full aspect-square">
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