import Card from "@/components/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, mySpecialties } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="pb-1 relative overflow-hidden pt-17">
        <div className="max-w grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* left */}
          <div className="pl-30 ">
            <Image
              src="/floral.webp"
              alt="floral img"
              height={700}
              width={600}
              className=" rounded-t-full"
              priority
            />
          </div>
          {/* right */}
          <div className="text-center sm:text-left flex flex-col gap-3 items-center">
            <h1 className="text-5xl sm:text-xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Live your life
              <br />
              in full bloom
            </h1>
            <p className="text-lg sm:text-xl mb-12 max-w-lg font-light">
              Therapy for Adults in Minneapolis, MN.
            </p>
            <Link href="/">
              <div
                size="xl"
                className={
                  "border border-black text-sm  h-12 w-50 flex justify-center items-center"
                }
              >
                CONNECT WITH ME <ArrowRight height={10} width={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Left: text content */}
        <div className="bg-[#e6e1d9] p-12 flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center flex-1">
            <h2 className="text-6xl  text-green-900 mb-6">
              Live a fulfilling life.
            </h2>
            <p className="mb-4 text-green-900 max-w-md">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>
            <p className="text-green-900 max-w-md">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="mt-6 text-green-900 font-semibold self-start">
              GET IN TOUCH →
            </button>
          </div>
        </div>

        {/* Right: full image */}
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src="/floral.webp" // replace with your image path
            alt="Decorative image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="max-w min-h-auto">
        <div className="max-w flex justify-center items-center text-5xl my-7 font-semibold text-green-900">
          <h1>My Specialties</h1>
        </div>
        <div className="max-w grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10">
          {mySpecialties.map((item) => {
            return <Card key={item.id} content={item} />;
          })}
        </div>
      </section>

      <section className="max-w grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Right: full image */}
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src="/floral.webp" // replace with your image path
            alt="Decorative image"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Left: text content */}
        <div className="bg-[#957eac] p-12 flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center flex-1">
            <h2 className="text-6xl  text-green-900 mb-6">
              You don’t have to do this all alone.
            </h2>
            <p className="mb-4 text-green-900 max-w-md">
              If you are facing any of these, there’s hope:
              <br />
              Persistent feelings of sadness or hopelessness
              <br />
              Trouble focusing or making decisions
              <br />
              Difficulty maintaining relationships
              <br />
              Feeling constantly exhausted or unmotivated
              <br />
              A pervasive sense of being overwhelmed
              <br />
              With empathy and guidance we'll work together to navigate the
              challenges life throws your way.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="mt-6 text-green-900 font-semibold self-start">
              WORK WITH ME →
            </button>
          </div>
        </div>
      </section>

      <section className="pb-1 mt-6 relative overflow-hidden min-h-[1000px]">
        <div className="max-w grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* left */}
          <div className="text-center sm:text-left flex flex-col gap-3 items-center">
            <h1 className="text-5xl sm:text-xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Live your life
              <br />
              in full bloom
            </h1>
            <p className="text-lg sm:text-xl mb-12 max-w-lg font-light">
              Therapy for Adults in Minneapolis, MN.
            </p>
            <Link href="/">
              <div
                size="xl"
                className={
                  "border border-black text-sm  h-12 w-50 flex justify-center items-center"
                }
              >
                CONNECT WITH ME <ArrowRight height={10} width={20} />
              </div>
            </Link>
          </div>
          {/* right */}
          <div className=" pr-7 mt-5">
            {/* Main tall image */}
      

            <Image
              src="/floral.webp"
              alt="floral img"
              width={480}
              height={700}
              priority
              className="rounded-t-full object-cover"
              />
            <div className="relative z-10 -translate-y-55 translate-x-80">
              <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden z-10">
                <Image
                  src="/floral.webp"
                  alt="floral detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
             

            {/* Overlapping circular image */}
          </div>
        </div>
      </section>

      <section className="pb-1 relative overflow-hidden ">
        <div className="max-w grid lg:grid-cols-2 gap-12 items-center relative z-10 ">
          {/* left */}
          <div className="pl-70">
            <Image
              src="/floral.webp"
              alt="floral img"
              width={480}
              height={700}
              priority
              className="rounded-t-full object-cover "
            />
          </div>
          {/* right */}
          <div className="text-center sm:text-left flex flex-col gap-3 jusify-center pt-40  h-full ">
            <h1 className="text-5xl sm:text-xl md:text-7xl font-semibold text-green-900 mb-6 leading-[0.95] tracking-tight">
              FAQs
            </h1>
            {faqItems.map((faq, index) => {
              return (
                <Accordion
                  type="single"
                  key={index}
                  collapsible
                  className="w-full"
                >
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EDE9E3] py-32">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-medium text-center text-[#2F3B1F] mb-16">
            My Professional Background
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full border-t border-[#2F3B1F]/40"
          >
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#2F3B1F]/40 py-6"
              >
                <AccordionTrigger className="flex w-full items-center justify-between text-2xl font-medium text-[#2F3B1F] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="mt-6 pl-6 text-lg text-[#2F3B1F]/80 leading-relaxed">
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

          <Link href={"/blog"}  className="inline-flex items-center gap-3 border border-[#F7F5EF] px-10 py-4 text-sm tracking-wide text-[#F7F5EF] hover:bg-[#F7F5EF] hover:text-[#7B7A45] transition">
           GET IN TOUCH
              <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
