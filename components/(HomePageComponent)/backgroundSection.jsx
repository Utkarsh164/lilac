"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { profBack } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const BackgroundSection = () => {
  useGSAP(() => {
    const speSection = gsap.timeline({
      scrollTrigger: {
        trigger: ".background-section",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    speSection.from(".background-section", {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });
  return (
    <section className="background-section">
      <div className="background-container">
        <h2 className="background-title">My Professional Background</h2>

        <Accordion type="single" collapsible className="background-accordion">
          {profBack.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="background-item"
            >
              <AccordionTrigger className="background-trigger">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="background-content">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default BackgroundSection;
