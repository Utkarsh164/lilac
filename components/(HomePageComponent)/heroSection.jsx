"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const HeroSection = () => {
  useGSAP(() => {
    gsap.from(".hero-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.out",
    });
  });
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <Image
            src="/floral.webp"
            alt="floral img"
            width={700}
            height={900}
            priority
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              Live your life
              <br />
              in full bloom
            </h1>

            <p className="hero-subtitle">
              Anxiety & Trauma Therapy in Santa Monica, CA.
            </p>

            <Link href="/">
              <div className="hero-cta">
                CONNECT WITH ME
                <ArrowRight height={10} width={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
