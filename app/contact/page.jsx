"use client";
import { socialMedia } from "@/lib/data";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";

const Contact = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".connect-session", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.out",
    });

    const bookSession = gsap.timeline({
      scrollTrigger: {
        trigger: ".book-session",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    bookSession.from(".book-session", {
      opacity: 0,
      y: 30,
      duration: 1,
    });

    const mapSession = gsap.timeline({
      scrollTrigger: {
        trigger: ".map-session",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    mapSession.from(".map-session", {
      opacity: 0,
      y: 30,
      duration: 1,
    });

    const socialSession = gsap.timeline({
      scrollTrigger: {
        trigger: ".social-session",
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    socialSession.from(".social-session .grid > *", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
    });
  });

  return (
    <>
      <section className=" connect-session relative bg-[#cfd0d8] pb-36">
        <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-4">
          {/* LEFT COLUMN */}
          <div className="flex flex-col md:pl-20 pt-20 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#233a1b] mb-10">
              Let’s Connect
            </h1>

            <div className="text-[20px] text-[#233a1b] leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              <p className="mb-4">Starting therapy is courageous.</p>
              <p>
                Get in touch for questions, or to book a free
                <br />
                15-minute consultation.
              </p>
            </div>

            {/* Images */}
            <div className="relative mt-6 flex justify-center md:justify-start">
              <Image
                src="/floral.webp"
                alt="floral"
                width={240}
                height={420}
                className="rounded-t-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex justify-center lg:justify-start items-center order-last lg:order-none">
            <div
              className="bg-[#243b1b] text-white px-8 py-8 
                      w-full md:w-[550px] 
                      h-auto md:h-[250px] 
                      mx-auto lg:ml-10"
            >
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="font-semibold">PLEASE NOTE:</span> If you opt
                to use a “Form Block” on your contact page this is not
                HIPAA-compliant. Squarespace stores data that is input into
                forms in the Marketing tab under Profiles. Instead, you can
                embed a HIPAA-compliant form, a link to your client portal, or
                simply put your email address.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="book-session w-full flex items-center justify-center flex-col py-16 bg-[#ebe7e1]">
        <h1 className="text-5xl font-semibold text-[#2f3b1f] mb-8">
          Book an appointment.
        </h1>

        <p className="text-xl text-center max-w-3xl mb-24 text-gray-700">
          Add some text here if you like, and add your scheduling widget below,
          <br />
          (you can get one by signing up for a scheduling account through
          <br />
          Squarespace, the top-tier plan is HIPAA compliant OR you can use
          <br />
          your client portal).
        </p>

        <div className="bg-white px-16 py-14 flex flex-col gap-6 items-center shadow-sm">
          <p className="text-3xl font-bold text-gray-900">
            This page is not active
          </p>

          <p className="text-center text-gray-600">
            If you're the owner, please log into your account to <br />
            start a free trial or subscribe.
          </p>

          <button className="bg-black text-white px-6 py-3 mt-2 hover:bg-gray-800 transition">
            Go To Account
          </button>
        </div>
      </section>

      <section className="map-session w-full bg-[#8a8650] py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-26 ">
          <div className="text-white max-w-md ">
            <h1 className="text-5xl font-semibold mb-6">My Office</h1>

            <p className="text-xl leading-relaxed mb-12">
              123 Example Street <br />
              Minneapolis, MN
            </p>

            <h2 className="text-5xl font-semibold mb-4">Hours</h2>

            <p className=" text-xl leading-relaxed">
              Monday – Friday <br />
              10am – 6pm
            </p>
          </div>

          <div className="w-full lg:w-[700px] h-[420px] bg-white">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps?q=123th+Street+45+W+Santa+Monica+CA+90401&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="social-session w-max-screen px-10 py-16 bg-[#faf6ef]">
        <h1 className="text-5xl text-green-900 mb-12">Find me on social.</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {socialMedia.map((it) => (
            <div key={it.id} className="relative w-full aspect-square">
              <Image
                src={it.imgUrl}
                alt={it.id}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
