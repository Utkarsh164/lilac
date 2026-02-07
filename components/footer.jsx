import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="bg-[#FBF7F2] px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 justify-between text-[#2F3B1F] text-center md:text-left items-center md:items-start">
          {/* Left column */}
          <div className="md:w-1/2 flex-1 max-w-md md:max-w-none">
            <h3 className="text-3xl font-medium mb-6">Lilac Template</h3>

            <p className="leading-relaxed mb-6">
              123 Example Road <br />
              Minneapolis, MN
            </p>

            <p className="leading-relaxed">
              <a href="mailto:email@example.com" className="underline">
                email@example.com
              </a>
              <br />
              <a href="tel:5555555555" className="underline">
                (555) 555-5555
              </a>
            </p>
          </div>

          {/* Hours */}
          <div className="md:w-1/4 max-w-md">
            <h3 className="text-2xl font-medium mb-6">Hours</h3>
            <p className="leading-relaxed">
              Monday – Friday <br />
              10am – 6pm
            </p>
          </div>

          {/* Find */}
          <div className="md:w-1/4 max-w-md">
            <h3 className="text-2xl font-medium mb-6">Find</h3>

            <nav className="flex flex-col gap-2">
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
      </section>

      <section className="bg-[#E9E6DF] px-6 py-12 text-[#2F3B1F] text-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
          {/* Legal links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 underline">
            <Link href="/privacy-policy">Privacy & Cookies Policy</Link>
            <Link href="/good-faith-estimate">Good Faith Estimate</Link>
            <Link href="/terms">Website Terms & Conditions</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </nav>

          {/* Credits */}
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

          {/* Copyright */}
          <p className="opacity-80">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
