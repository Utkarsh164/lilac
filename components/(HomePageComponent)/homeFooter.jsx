"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


gsap.registerPlugin(ScrollTrigger);
const HomeFooter = () => {
  useGSAP(() => {
    const speSection = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-cta-section",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    speSection.from(".footer-cta-section", {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });
  return (
    <section className="footer-cta-section">
      <div className="footer-cta-container">
        <h1 className="footer-cta-title">Get started today.</h1>

        <p className="footer-cta-text">
          Ready to take the first step towards a happier, healthier you? Contact
          me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>

        <Link href={"/contact"} className="footer-cta-button">
          GET IN TOUCH
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default HomeFooter;
