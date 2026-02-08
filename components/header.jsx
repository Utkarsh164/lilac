"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [drop, setDrop] = useState(false);
  return (
    <header className="top-0 left-0 max-w-screen z-50">
      <div className="mx-auto sticky flex h-[88px] items-center justify-between px-6 md:px-[54px] z-51 bg-transparent">
        <button
          className="flex flex-col gap-2 md:hidden"
          aria-label="Open menu"
          onClick={() => {
            setDrop(!drop);
          }}
        >
          {drop ? (
            <span className="w-10 text-3xl">X</span>
          ) : (
            <>
              <span className="w-10 h-[2px] bg-[#2F3B1F]" />
              <span className="w-10 h-[2px] bg-[#2F3B1F]" />
            </>
          )}
        </button>

        <h1 className="text-3xl md:text-4xl font-medium text-[#2F3B1F] ml-auto md:ml-0">
          <Link href="/">Lilac Template</Link>
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-2xl text-[#2F3B1F]">
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      {drop && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-12 text-5xl font-semibold bg-white md:hidden">
          <Link href="/blog" onClick={() => setDrop(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setDrop(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
