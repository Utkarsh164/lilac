"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const SupportSection = () => {
  const sectionRef = useRef(null);

 useGSAP(
  () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.from(".support-image-wrapper", {
      opacity: 0,
      y: 50,
      duration: 0.6,
    }).from(
      ".support-content-wrapper",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.2"
    );
  },
  { scope: sectionRef }
);

  return (
    <section ref={sectionRef} className="support-section">
      <div className="support-image-wrapper">
        <Image
          src="/notAlone.png"
          alt="Decorative image"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="support-content-wrapper">
        <div className="support-text-content">
          <h2 className="support-title">
            You don’t have to do this all alone.
          </h2>

          <p className="support-subtitle">
            If you are facing any of these, there’s hope:
          </p>

          <ul className="support-list">
            <li>Constant worry or overthinking</li>
            <li>Difficulty relaxing or sleeping</li>
            <li>Tension in your body or frequent stress</li>
            <li>Lingering effects of past experiences</li>
            <li>Burnout from long-term pressure or perfectionism</li>
          </ul>

          <p className="support-conclusion">
            With empathy and guidance, we’ll work together to navigate the
            challenges life throws your way.
          </p>
        </div>

        <Link href="/contact">
          <div className="support-cta">WORK WITH ME →</div>
        </Link>
      </div>
    </section>
  );
};

export default SupportSection;