import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ content }) => {
  return (
    <article className="flex flex-col gap-6">
      <div className="relative w-full h-[520px] overflow-hidden">
        <Image
          src={content.imgUrl}
          alt={content.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 text-[#2E3D1F]">
        <span className="text-sm opacity-70">{content.date}</span>

        <h2 className="text-3xl font-semibold tracking-tight">
          {content.title}
        </h2>

        <Link href={`/blog/${content.slug}`}>
          <span className="text-sm underline underline-offset-4 w-fit cursor-pointer">
            Read More
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
