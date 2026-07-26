// components/WhoWeAre.jsx
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const values = [
  {
    title: "Our Mission",
    description: "To simplify the study abroad journey by providing honest, personalized guidance so every student can achieve their academic goals without confusion or stress.",
  },
  {
    title: "Our Vision",
    description: "To become the most trusted student consultancy in Bangladesh, known for transparency, integrity, and real results for every student we work with.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          subTitle="Who We Are"
          title="Helping Students Build Their Future Abroad"
          highlight="Future Abroad"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 items-center gap-16">
          <div className="relative">
            <div className="relative w-4/5 aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/about/team-1.jpg"
                alt="Wow Consultancy team"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-3/5 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/about/team-2.jpg"
                alt="Student consultation session"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />
            </div>

            <span className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary/10 -z-10" />
          </div>

          <div>
            <p className="text-dark/70">
              Founded with a simple belief — that every student deserves clear, honest guidance when planning their education abroad — Wow Consultancy and Visa has grown into a trusted name for students pursuing their academic dreams in South Korea. We combine deep knowledge of university admissions, visa regulations, and scholarship opportunities to guide students at every step.
            </p>

            <div className="flex flex-col gap-6 mt-8">
              {values.map((value) => (
                <div key={value.title} className="border-l-4 border-primary pl-6">
                  <h3>{value.title}</h3>
                  <p className="mt-1">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;