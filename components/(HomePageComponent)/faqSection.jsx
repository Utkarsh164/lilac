"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const FaqSection = () => {
  useGSAP(() => {
    const speSection = gsap.timeline({
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    speSection.from(".faq-section", {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-image-column">
          <Image
            src="/floral.webp"
            alt="Floral"
            width={420}
            height={680}
            priority
            className="faq-image"
          />
        </div>

        <div className="faq-content-column">
          <h2 className="faq-title">FAQs</h2>

          <div className="faq-list">
            {faqItems.map((faq, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="faq-item-trigger">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="faq-item-content">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
