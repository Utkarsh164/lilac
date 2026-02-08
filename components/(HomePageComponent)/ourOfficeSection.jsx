"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";
import Image from "next/image";

const OurOfficeSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const officeTop = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-office",
        start: "top 75%",
        end: "bottom bottom",
      },
    });

    officeTop.from(".our-office", {
      opacity: 0,
      y: 40,
      duration: 1,
    });

    officeTop.from(
      ".our-office .space-y-8, .our-office .prose, .our-office aside",
      { opacity: 0, y: 20, stagger: 0.12, duration: 0.6 },
      "-=" + 0.6
    );

    const officeImages = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-office",
        start: "top 60%",
        end: "bottom bottom",
      },
    });

    officeImages.from(".our-office .relative", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
    });
  });

  return (
    <section className="our-office bg-[#fbf8f4] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#2E3D1F]">
                Our Office
              </h2>
              <p className="mt-4 text-lg text-[#2E3D1F]/80 max-w-xl">
                A calm, private space in Santa Monica designed to help you feel safe, grounded, and supported from the moment you arrive.
              </p>
            </div>

            <div className="border-l-4 border-[#2E3D1F] pl-6 space-y-3">
              <p className="text-[#2E3D1F]">
                <strong>Location:</strong> 123th Street 45 W, Santa Monica, CA 90401
              </p>
              <p className="text-sm text-gray-600">
                In-person sessions available by appointment
              </p>
            </div>

            <div className="prose max-w-none text-[#2E3D1F]">
              <p>
                I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with appear capable and high-functioning on the outside, while internally feeling emotionally exhausted or constantly on edge.
              </p>

              <p>
                My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the surface while struggling with overthinking, physical tension, disrupted sleep, or a sense of always bracing for something to go wrong.
              </p>

              <p>
                I offer both in-person therapy from this Santa Monica office and secure telehealth sessions for clients across California. The office itself is a quiet, private environment with natural light and a simple, uncluttered design to support a sense of calm and safety during sessions.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[220px] rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src="/office.png"
                  alt="Therapy office interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[220px] rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src="/office2.png"
                  alt="Waiting area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-sm text-gray-700">
              <p className="font-medium text-[#2E3D1F]">Session Options</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>In-person therapy in Santa Monica</li>
                <li>Secure telehealth across California</li>
                <li>Private, quiet office setting</li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default OurOfficeSection;