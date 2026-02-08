import Card from "@/components/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, mySpecialties, profBack } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useGSAP(()=>{
    
    gsap.from(".hero-section",{
      opacity:0,
      y:50,
      duration:1,
      ease:"power1.out"
    })
    const introSection=gsap.timeline({
      scrollTrigger:{
        trigger:".intro-section",
        start:"top 50%",
        end:"bottom bottom",

      }
    })
    introSection.from(".intro-section>*",{
      opacity:0,
      y:50,
      duration:1,
    })
    const supportSection=gsap.timeline({
      scrollTrigger:{
        trigger:".support-section",
        start:"top 50%",
        end:"bottom bottom",

      }
    })
    supportSection.from(".support-section>*",{
      opacity:0,
      y:50,
      duration:1,
    })
  })
  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-image-wrapper">
            <Image
              src="/floral.webp"
              alt="floral img"
              width={700}
              height={900}
              priority
              className="hero-image"
            />
          </div>

          <div className="hero-content">
            <div className="hero-text-wrapper">
              <h1 className="hero-title">
                Live your life
                <br />
                in full bloom
              </h1>

              <p className="hero-subtitle">
                Anxiety & Trauma Therapy in Santa Monica, CA.
              </p>

              <Link href="/">
                <div className="hero-cta">
                  CONNECT WITH ME
                  <ArrowRight height={10} width={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-image-wrapper">
          <Image
            src="/floral.webp"
            alt="Decorative image"
            fill
            className="intro-image"
            priority
          />
        </div>

        <div className="intro-content-wrapper">
          <div className="intro-text-content">
            <h2 className="intro-title">
              Live a fulfilling life.
            </h2>

            <p className="intro-description">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="intro-sub-description">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>
          </div>

          <Link href="/contact">
            <div className="intro-cta">
              GET IN TOUCH →
            </div>
          </Link>
        </div>
      </section>

      <section className="specialties-section">
        <h1 className="specialties-title">
          My Specialties
        </h1>

        <div className="specialties-grid">
          {mySpecialties.map((item) => (
            <Card key={item.id} content={item} />
          ))}
        </div>
      </section>

      <section className="support-section">
        <div className="support-image-wrapper">
          <Image
            src="/floral.webp"
            alt="Decorative image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="support-content-wrapper">
          <div className="support-text-content">
            <h2 className="support-title">
              You don’t have to do this all alone.
            </h2>

            <p className="support-subtitle">
              If you are facing any of these, there’s hope:
            </p>

            <ul className="support-list">
              <li>Constant worry or overthinking</li>
              <li>Difficulty relaxing or sleeping</li>
              <li>Tension in your body or frequent stress</li>
              <li>Lingering effects of past experiences</li>
              <li>Burnout from long-term pressure or perfectionism</li>
            </ul>

            <p className="support-conclusion">
              With empathy and guidance, we’ll work together to navigate the
              challenges life throws your way.
            </p>
          </div>

          <Link href="/contact">
            <div className="support-cta">
              WORK WITH ME →
            </div>
          </Link>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-grid">
            {/* IMAGE (top on mobile, right on desktop) */}
            <div className="about-image-column">
              {/* Tall arch image */}
              <Image
                src="/floral.webp"
                alt="floral"
                width={460}
                height={700}
                priority
                className="about-image"
              />

              {/* Overlapping circle (desktop only) */}
              <div className="about-circle-decoration">
                <div className="about-circle-wrapper">
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
            <div className="about-text-column">
              <h1 className="about-title">
                Live your life
                <br />
                in full bloom
              </h1>

              <p className="about-subtitle">
                Therapy for Adults in Minneapolis, MN.
              </p>

              <Link href="/" className="mt-10">
                <div className="about-cta">
                  CONNECT WITH ME
                  <ArrowRight height={12} width={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          {/* LEFT IMAGE */}
          <div className="faq-image-column">
            <Image
              src="/floral.webp"
              alt="Floral"
              width={420}
              height={680}
              priority
              className="faq-image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="faq-content-column">
            <h2 className="faq-title">
              FAQs
            </h2>

            <div className="faq-list">
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
                    <AccordionTrigger className="faq-item-trigger">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="faq-item-content">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="background-section">
        <div className="background-container">
          <h2 className="background-title">
            My Professional Background
          </h2>

          <Accordion
            type="single"
            collapsible
            className="background-accordion"
          >
            {profBack.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="background-item"
              >
                <AccordionTrigger
                  className="background-trigger"
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="background-content"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="footer-cta-section">
        <div className="footer-cta-container">
          <h1 className="footer-cta-title">
            Get started today.
          </h1>

          <p className="footer-cta-text">
            Ready to take the first step towards a happier, healthier you?
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>

          <Link
            href={"/contact"}
            className="footer-cta-button"
          >
            GET IN TOUCH
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
