// components/FounderSpotlight.jsx
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

const Founder = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <FaQuoteLeft className="text-primary/20 text-6xl" />

            <p className="text-2xl sm:text-3xl font-heading font-semibold text-dark leading-snug mt-4">
              I started this consultancy because I believe every student
              deserves honest guidance, not just a sales pitch.
            </p>

            <p className="mt-6">
              With over a decade of experience in international education,
              I&apos;ve seen too many students misled by false promises.
              That&apos;s why we built Wow Consultancy and Visa on a foundation
              of transparency, genuine care, and results — helping students not
              just apply, but truly succeed abroad.
            </p>

            <div className="mt-8">
              <p
                className="font-heading text-2xl text-primary"
                style={{ fontStyle: "italic" }}
              >
                Md. Sazal Ahamed
              </p>
              <p className="text-sm mt-1">
                Founder & CEO, Wow Consultancy and Visa
              </p>
            </div>
          </div>
          <div className="relative w-full max-h-[600px] aspect-[5/6] rounded-xl overflow-hidden">
            <Image
              src="/founder.jfif"
              alt="Founder of Wow Consultancy and Visa"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
