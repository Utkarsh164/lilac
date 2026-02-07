import { socialMedia } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="relative bg-[#cfd0d8] pb-36">
        <div className="max-w-full mx-auto grid lg:grid-cols-2 gap-20 px-4 ">
          {/* LEFT COLUMN */}
          <div className="flex flex-col pl-20 pt-20">
            <h1 className="text-[88px] font-medium tracking-tight text-[#233a1b] mb-10">
              Let’s Connect
            </h1>

            <div className="text-[20px] text-[#233a1b] leading-relaxed mb-4 max-w-md">
              <p className="mb-4">Starting therapy is courageous.</p>
              <p>
                Get in touch for questions, or to book a free
                <br />
                15-minute consultation.
              </p>
            </div>

            {/* Images */}
            <div className="relative mt-3 ml-6">
              <Image
                src="/floral.webp"
                alt="floral"
                width={240}
                height={420}
                className="rounded-t-full object-cover"
              />

              <div className="absolute bottom-0 right-[270px] w-[160px] h-[160px] rounded-full overflow-hidden">
                <Image
                  src="/floral.webp"
                  alt="floral detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-center">
            <div className="bg-[#243b1b] text-white px-8 py-8 w-[550px] h-[250px] ml-10">
              <p className="text-xl">
                <span className="text-xl font-semibold">PLEASE NOTE:</span> If
                you opt to use a “Form Block” on your contact page this is not
                HIPAA-compliant. Squarespace stores data that is input into
                forms in the Marketing tab under Profiles. Instead, you can
                embed a HIPAA-compliant form, a link to your client portal, or
                simply put your email address.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center flex-col py-16 bg-[#ebe7e1]">
        {/* Heading */}
        <h1 className="text-5xl font-semibold text-[#2f3b1f] mb-8">
          Book an appointment.
        </h1>

        {/* Description */}
        <p className="text-xl text-center max-w-3xl mb-24 text-gray-700">
          Add some text here if you like, and add your scheduling widget below,
          <br />
          (you can get one by signing up for a scheduling account through
          <br />
          Squarespace, the top-tier plan is HIPAA compliant OR you can use
          <br />
          your client portal).
        </p>

        {/* Card */}
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

      <section className="w-full bg-[#8a8650] py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-26 ">
          {/* LEFT SIDE — TEXT */}
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

          {/* RIGHT SIDE — MAP */}
          <div className="w-full lg:w-[700px] h-[420px] bg-white">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps?q=Minneapolis,MN&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="w-max-screen px-10 py-16 bg-[#faf6ef]">
        <h1 className="text-5xl text-green-900 mb-12">Find me on social.</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
  {socialMedia.map((it) => (
    <div
      key={it.id}
      className="relative w-full aspect-square"
    >
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
