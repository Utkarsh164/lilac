import Card from "@/components/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, mySpecialties, profBack } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" ">
      <section className="relative overflow-hidden bg-[#fbf8f4]  py-20 md:pt-20 ">
        <div className="max-w-full mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-center gap-16 ">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:-ml-12 xl:-ml-20 lg: pl-30 ">
            <Image
              src="/floral.webp"
              alt="floral img"
              width={700}
              height={900}
              priority
              className="rounded-t-full 
               max-w-xs sm:max-w-sm md:max-w-md
               lg:max-w-xl xl:max-w-2xl"
            />
          </div>

          <div className="w-full pl-20 lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col justify-center items-center ">
              <h1
                className="font-medium tracking-tight leading-[0.95]
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                Live your life
                <br />
                in full bloom
              </h1>

              <p className="mt-6 text-base sm:text-lg max-w-md font-light">
                Anxiety & Trauma Therapy in Santa Monica, CA.
              </p>

              <Link href="/">
                <div className="mt-10 border border-black h-12 w-56 flex items-center justify-center gap-2 text-sm">
                  CONNECT WITH ME
                  <ArrowRight height={10} width={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] bg-[#e6e1d9]">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-full order-1 lg:order-2">
          <Image
            src="/floral.webp"
            alt="Decorative image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-between order-2 lg:order-1">
          <div className="px-6 md:px-10 py-12 md:py-56 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-green-900 mb-6">
              Live a fulfilling life.
            </h2>

            <p className="mb-4 text-lg md:text-xl text-green-900 max-w-xl">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="text-green-900 text-lg md:text-xl max-w-xl">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>
          </div>

          <Link href="/contact">
            <div className="flex justify-center items-center border-t border-green-900 py-5 hover:bg-green-900 hover:text-white transition">
              GET IN TOUCH →
            </div>
          </Link>
        </div>
      </section>

      <section className="max-w mx-auto px-6 py-16">
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-green-900 mb-14">
          My Specialties
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {mySpecialties.map((item) => (
            <Card key={item.id} content={item} />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        <div className="relative w-full min-h-[400px]">
          <Image
            src="/floral.webp"
            alt="Decorative image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-[#D6D3DF]  pt-20 flex flex-col justify-between">
          <div className="pl-20 max-w pr-10">
            <h2 className="text-5xl lg:text-6xl font-semibold text-[#2F3F2F] mb-6">
              You don’t have to do this all alone.
            </h2>

            <p className="text-[#2F3F2F] mb-6 opacity-90">
              If you are facing any of these, there’s hope:
            </p>

            <ul className="list-disc list-inside space-y-3 text-[#2F3F2F] opacity-90 mb-8">
              <li>Constant worry or overthinking</li>
              <li>Difficulty relaxing or sleeping</li>
              <li>Tension in your body or frequent stress</li>
              <li>Lingering effects of past experiences</li>
              <li>Burnout from long-term pressure or perfectionism</li>
            </ul>

            <p className="text-[#2F3F2F] opacity-90">
              With empathy and guidance, we’ll work together to navigate the
              challenges life throws your way.
            </p>
          </div>

          <Link href="/contact">
            <div className="flex justify-center items-center border-t border-green-900 py-5 hover:bg-green-900 hover:text-white transition">
              WORK WITH ME →
            </div>
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* IMAGE (top on mobile, right on desktop) */}
            <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
              {/* Tall arch image */}
              <Image
                src="/floral.webp"
                alt="floral"
                width={460}
                height={700}
                priority
                className="
                rounded-t-full object-cover
                w-[240px] sm:w-[300px] md:w-[420px] lg:w-[460px]
                h-auto
              "
              />

              {/* Overlapping circle (desktop only) */}
              <div className="absolute hidden md:block -bottom-16 md:-right-8 lg:-right-20">
                <div className="relative w-48 lg:w-56 aspect-square rounded-full overflow-hidden">
                  <Image
                    src="/floral.webp"
                    alt="floral detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* TEXT (bottom on mobile, left on desktop) */}
            <div className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="font-bold tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Live your life
                <br />
                in full bloom
              </h1>

              <p className="mt-6 max-w-md text-base sm:text-lg font-light">
                Therapy for Adults in Minneapolis, MN.
              </p>

              <Link href="/" className="mt-10">
                <div className="flex items-center gap-3 border border-black px-6 py-3 text-sm">
                  CONNECT WITH ME
                  <ArrowRight height={12} width={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 px-6">
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/floral.webp"
              alt="Floral"
              width={420}
              height={680}
              priority
              className="rounded-t-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center gap-10">
            <h2 className="text-5xl md:text-6xl font-semibold text-green-900 tracking-tight">
              FAQs
            </h2>

            <div className="divide-y divide-green-900/30">
              {faqItems.map((faq, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="text-left text-xl font-medium text-green-900 py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-green-900/80 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EDE9E3] py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center text-[#2F3B1F] mb-12 md:mb-16">
            My Professional Background
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full border-t border-[#2F3B1F]/40"
          >
            {profBack.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#2F3B1F]/40 py-5 md:py-6"
              >
                <AccordionTrigger
                  className="
              flex w-full items-center justify-between
              text-xl md:text-2xl
              font-medium text-[#2F3B1F]
              hover:no-underline
            "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
              mt-4 md:mt-6
              pl-4 md:pl-6
              text-base md:text-lg
              text-[#2F3B1F]/80
              leading-relaxed
            "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-[#7B7A45] py-30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-6xl font-medium text-[#F7F5EF] mb-6">
            Get started today.
          </h1>

          <p className="text-lg md:text-xl text-[#F7F5EF]/90 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            Ready to take the first step towards a happier, healthier you?
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>

          <Link
            href={"/contact"}
            className="inline-flex items-center gap-3 border border-[#F7F5EF] px-10 py-4 text-sm tracking-wide text-[#F7F5EF] hover:bg-[#F7F5EF] hover:text-[#7B7A45] transition"
          >
            GET IN TOUCH
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
