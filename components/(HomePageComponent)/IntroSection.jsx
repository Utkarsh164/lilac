"use client";

import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger)
const IntroSection = () => {
  useGSAP(() => {
    const introSection = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    introSection.from(".intro-section>*", {
      opacity: 0,
      y: 50,
      duration: 1,
    });
    
  });
  return (
    <section className="intro-section">
      <div className="intro-image-wrapper">
        <Image
          src="/horizon.png"
          alt="Decorative image"
          fill
          className="intro-image"
          priority
        />
      </div>

      <div className="intro-content-wrapper">
        <div className="intro-text-content">
          <h2 className="intro-title">Live a fulfilling life.</h2>

          <p className="intro-description">
            Life can be challenging—especially when you're trying to balance
            your personal and professional life.
          </p>

          <p className="intro-sub-description">
            It's easy to feel like you're alone in facing these challenges, but
            I want you to know that I'm here to help.
          </p>
        </div>

        <Link href="/contact">
          <div className="intro-cta">GET IN TOUCH →</div>
        </Link>
      </div>
    </section>
  );
};

export default IntroSection;
