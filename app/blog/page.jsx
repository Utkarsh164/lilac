import BlogCard from "@/components/blogCard";
import { blogItems } from "@/lib/data";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <section className="min-h-screen bg-[#FBF7F2] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
              <div className="relative w-[180px] h-[240px] md:w-[200px] md:h-[300px] lg:w-[500px] lg:h-[700px] rounded-t-[999px] overflow-hidden">
                <Image
                  src="/floral.webp"
                  alt="Reading moment"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-1/2">
              <h1 className="text-5xl md:text-7xl font-semibold text-[#2E3D1F] leading-tight tracking-tight">
                Therapy Insights & Reflections
              </h1>

              <p className="text-md md: text-2xl text-[#2E3D1F]/80 max-w">
                 A space where I share thoughts on anxiety, trauma,
                <br />
                burnout, and creating steadier emotional ground.
              </p>

              <span className="text-md font-medium text-[#2E3D1F]/80">
                Glad you’re here.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FBF7F2] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {blogItems.map((item) => (
              <BlogCard key={item.id} content={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-max-screen bg-[#8a8650] py-20">
        <div className="max-w-6xl mx-auto border border-2 border-gray-300 px-6 py-27">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-semibold text-white mb-4">
              Subscribe
            </h1>

            <p className="text-white mb-10 font-medium text-xl">
              Sign up with your email address to receive news and updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-5 w-72 text-gray-700 outline-none bg-white"
              />

              <button className="px-8 py-3 border border-white text-white uppercase tracking-wider hover:bg-white hover:text-[#8a8650] transition">
                Sign Up
              </button>
            </div>

            <p className="text-xl text-white opacity-80">
              We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
