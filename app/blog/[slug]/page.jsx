"use client";

import { blogItems } from "@/lib/data";
import { formatDate } from "@/lib/helper";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const { slug } = useParams();
  const content = blogItems.find((item) => item.slug === slug);
  if (!content) notFound();
  const prevPost = blogItems.find((item) => item.id === content.id - 1);
  const nextPost = blogItems.find((item) => item.id === content.id + 1);


  return (
    <section className="bg-[#FBF7F2] min-h-screen">
      <div className="mx-auto max-w-[640px] px-6 pt-[140px] pb-[160px]">

        <p className="text-center text-[12px] tracking-[0.2em] text-[#2E3D1F]/60 mb-[48px]">
          {formatDate(content.date).toUpperCase()}
        </p>

        <h1 className="text-center text-7xl leading-[1.15] font-medium text-[#2E3D1F] mb-[72px]">
          {content.title}
        </h1>

        <div className="space-y-[32px] text-xl leading-[1.8] text-[#2E3D1F]/80">
          {content.content.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-screen px-6 pb-[120px]">
        <div className="flex items-center justify-between gap-5 text-[#2E3D1F]">
          {/* PREV */}
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex items-center gap-4 text-4xl font-medium hover:opacity-70 transition"
            >
              <span className="text-5xl leading-none">←</span>
              <span className="group-hover:underline">{prevPost.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {/* NEXT */}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-center gap-4 text-4xl font-medium hover:opacity-70 transition"
            >
              <span className="group-hover:underline">{nextPost.title}</span>
              <span className="text-5xl leading-none">→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
