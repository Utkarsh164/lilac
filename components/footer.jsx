import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="bg-[#FBF7F2] px-12 pt-32 pb-40 ">
        <div className="max-w mx-auto flex justify-between text-[#2F3B1F]">
          <div className="max-w-sm">
            <h3 className="text-[39px] font-semibold mb-10">Lilac Template</h3>

            <p className="mb-10 leading-[1.8] font-medium text-xl">
              123 Example Road
              <br />
              Minneapolis, MN
            </p>

            <p className="leading-[1.8] font-medium text-xl">
              <a href="mailto:email@example.com" className="underline">
                email@example.com
              </a>
              <br />
              <a href="tel:5555555555" className="underline">
                (555) 555-5555
              </a>
            </p>
          </div>

          <div className="flex gap-55">
            <div className="max-w-xs">
              <h3 className="text-[28px] text-[39px] font-semibold mb-10">
                Hours
              </h3>
              <p className="leading-[1.8] font-medium text-xl">
                Monday – Friday
                <br />
                10am – 6pm
              </p>
            </div>

            <div className="max-w-xs text-right flex flex-col items-center">
              <h3 className="text-[39px] font-semibold mb-10">Find</h3>

              <nav className="flex flex-col gap-3 font-medium text-xl">
                <Link href="/" className="underline">
                  Home
                </Link>
                <Link href="/contact" className="underline">
                  Contact
                </Link>
                <Link href="/blog" className="underline">
                  Blog
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E9E6DF] px-6 pt-16 pb-20 text-[#2F3B1F] text-md">
        <div className="max-w-[1200px] mx-auto text-center space-y-8">
          <nav className="flex justify-center gap-8 underline">
            <Link href="/privacy-policy">Privacy & Cookies Policy</Link>
            <Link href="/good-faith-estimate">Good Faith Estimate</Link>
            <Link href="/terms">Website Terms & Conditions</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </nav>

          <p>
            Website Template Credits:{" "}
            <a
              href="https://gobloomcreative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Go Bloom Creative
            </a>
          </p>

          <p className="opacity-80">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
