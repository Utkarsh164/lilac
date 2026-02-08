"use client"
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Card from "@/components/card";
import { mySpecialties } from "@/lib/data";
gsap.registerPlugin(ScrollTrigger);
const SpecialtiesSection = () => {
  useGSAP(() => {
    const speSection = gsap.timeline({
      scrollTrigger: {
        trigger: ".specialties-section",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    speSection.from(".specialties-section>h1", {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });
  return (
    <section className="specialties-section">
      <h1 className="specialties-title">My Specialties</h1>

      <div className="specialties-grid">
        {mySpecialties.map((item) => (
          <Card key={item.id} content={item} />
        ))}
      </div>
    </section>
  );
};

export default SpecialtiesSection;
