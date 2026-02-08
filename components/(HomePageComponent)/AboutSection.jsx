"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  useGSAP(() => {
    const speSection = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    speSection.from(".about-section", {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-column">
            <Image
              src="/floral.webp"
              alt="floral"
              width={460}
              height={700}
              priority
              className="about-image"
            />

            <div className="about-circle-decoration">
              <div className="about-circle-wrapper">
                <Image
                  src="/floral.webp"
                  alt="floral detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="about-text-column">
            <h1 className="about-title">
              Live your life
              <br />
              in full bloom
            </h1>

            <p className="about-subtitle">
              Therapy for Adults in Minneapolis, MN.
            </p>

            <Link href="/" className="mt-10">
              <div className="about-cta">
                CONNECT WITH ME
                <ArrowRight height={12} width={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
