import Image from "next/image";

const BlogCard = ({ content }) => {
  return (
    <article className="flex flex-col gap-6">
      {/* IMAGE */}
      <div className="relative w-full h-[520px] overflow-hidden">
        <Image
          src={content.imgUrl}
          alt={content.title}
          fill
          className="object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col gap-3 text-[#2E3D1F]">
        <span className="text-sm opacity-70">
          {content.date}
        </span>

        <h2 className="text-3xl font-semibold tracking-tight">
          {content.title}
        </h2>

        <span className="text-sm underline underline-offset-4 w-fit cursor-pointer">
          Read More
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
