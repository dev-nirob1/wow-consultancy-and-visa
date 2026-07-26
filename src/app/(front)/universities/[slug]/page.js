// app/universities/[slug]/page.js
import Image from "next/image";
import Link from "next/link";
import {
  FaLocationDot,
  FaGraduationCap,
  FaEarthAsia,
  FaSackDollar,
  FaLanguage,
  FaTrophy,
  FaCheck,
  FaArrowRight,
  FaFileCircleCheck,
  FaMagnifyingGlass,
  FaUserGraduate,
  FaPassport,
  FaPlane,
  FaCalendar,
  FaCircleArrowRight,
  FaBookOpen,
  FaUsers,
} from "react-icons/fa6";
import CtaSection from "@/app/components/front/section/CtaSection";

const university = {
  name: "Seoul National University",
  location: "Seoul, South Korea",
  established: "1946",
  ranking: "#1 in South Korea",
  website: "https://www.snu.ac.kr",
  logo: "/universities/snu.avif",
  coverImage: "/university.jpg",
  tagline: "Where Excellence Meets Opportunity",
  intro:
    "Seoul National University (SNU) is South Korea's most prestigious research university, consistently ranked among Asia's top institutions. With over 16 colleges and graduate schools, SNU offers a world-class academic environment rooted in innovation, cultural diversity, and global collaboration.",
  quickFacts: [
    { icon: FaLocationDot, label: "Location", value: "Seoul, South Korea" },
    { icon: FaGraduationCap, label: "Programs", value: "120+ Programs" },
    { icon: FaEarthAsia, label: "International Students", value: "3,500+" },
    { icon: FaSackDollar, label: "Tuition (USD)", value: "$4K – $8K / yr" },
    {
      icon: FaLanguage,
      label: "Instruction Language",
      value: "Korean / English",
    },
    { icon: FaTrophy, label: "World Ranking", value: "QS Top 40" },
    {
      icon: FaCalendar,
      label: "Application Deadline",
      value: "November – February",
    },
    { icon: FaUsers, label: "Total Students", value: "28,000+" },
  ],
  programs: [
    { name: "Computer Science & AI", level: "Bachelor / Master / PhD" },
    { name: "Business Administration", level: "Bachelor / MBA" },
    { name: "Mechanical Engineering", level: "Bachelor / Master" },
    { name: "Economics & Finance", level: "Bachelor / Master" },
    { name: "Data Science & Statistics", level: "Master / PhD" },
    { name: "Industrial Design", level: "Bachelor / Master" },
    { name: "Law & International Studies", level: "Bachelor / LLM" },
    { name: "Life Sciences & Biotechnology", level: "Bachelor / PhD" },
  ],
  requirements: [
    {
      step: "01",
      title: "Academic Transcripts",
      desc: "Official high school or university transcripts, certified and translated into Korean or English.",
    },
    {
      step: "02",
      title: "Valid Passport",
      desc: "A copy of your current passport with at least 12 months validity from the start of the program.",
    },
    {
      step: "03",
      title: "Language Proficiency",
      desc: "IELTS 6.0+ or TOEFL iBT 80+ for English-taught programs. TOPIK Level 3+ for Korean-taught programs.",
    },
    {
      step: "04",
      title: "Statement of Purpose",
      desc: "A well-crafted SOP outlining your academic goals, motivation, and why you chose SNU.",
    },
    {
      step: "05",
      title: "Recommendation Letters",
      desc: "Two letters of recommendation from academic professors or professional supervisors.",
    },
    {
      step: "06",
      title: "Passport-Size Photograph",
      desc: "Recent passport-sized photo on a white background, taken within the last 6 months.",
    },
  ],
  tuition: {
    undergraduate: "$4,000 – $6,000",
    graduate: "$5,000 – $8,000",
    note: "Fees vary by college and program. Engineering and Sciences programs are typically higher than Humanities.",
  },
  scholarships: [
    {
      name: "Global Korea Scholarship (GKS)",
      coverage: "Full Tuition + Living Allowance",
      eligibility: "International students with strong academic record",
    },
    {
      name: "SNU International Excellence Award",
      coverage: "50% – 100% Tuition",
      eligibility: "Top-ranking incoming international students",
    },
    {
      name: "Korea Government Scholarship (NIIED)",
      coverage: "Full Support Package",
      eligibility: "Students from partner countries of Korea",
    },
  ],
  campusLife: [
    { image: "/university.jpg", caption: "Main Campus" },
    { image: "/why-choose-us.jpg", caption: "Student Activities" },
    { image: "/pagehero.jpg", caption: "Library & Research" },
    { image: "/about-1.jpg", caption: "Dormitory Life" },
  ],
  applicationSteps: [
    {
      icon: FaBookOpen,
      step: "01",
      title: "Choose Program",
      desc: "Explore available programs and select your preferred department and degree level.",
    },
    {
      icon: FaFileCircleCheck,
      step: "02",
      title: "Prepare Documents",
      desc: "Collect all required documents including transcripts, SOP, and language certificates.",
    },
    {
      icon: FaMagnifyingGlass,
      step: "03",
      title: "Submit Application",
      desc: "Complete the online application form and upload all documents before the deadline.",
    },
    {
      icon: FaUserGraduate,
      step: "04",
      title: "Admission Letter",
      desc: "Receive your conditional or unconditional offer letter from the university.",
    },
    {
      icon: FaPassport,
      step: "05",
      title: "Apply for Visa",
      desc: "Apply for your D-2 student visa at the Korean embassy with your admission documents.",
    },
    {
      icon: FaPlane,
      step: "06",
      title: "Fly to Korea",
      desc: "Board your flight, attend orientation, and begin your academic journey in South Korea.",
    },
  ],
};

const UniversityDetailsPage = () => {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-end">
        <Image
          src={university.coverImage}
          alt={university.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

        <div className="relative container pb-16 pt-40">
          {/* Ranking badge */}
          <span className="inline-flex items-center gap-2 bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <FaTrophy className="text-yellow-300" />
            {university.ranking}
          </span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              {/* Logo + Name */}
              <div className="flex items-center gap-5 mb-4">
                <div className="relative w-16 h-16 bg-white rounded-2xl p-2 shrink-0">
                  <Image
                    src={university.logo}
                    alt={`${university.name} logo`}
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h1 className="text-white">{university.name}</h1>
                  <p className="text-white/70 flex items-center gap-2 mt-1">
                    <FaLocationDot className="text-primary shrink-0" />
                    {university.location} · Est. {university.established}
                  </p>
                </div>
              </div>
              <p className="text-white/60 max-w-xl text-lg italic">
                &ldquo;{university.tagline}&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-2xl hover:bg-white/10 transition-colors duration-200 text-sm"
              >
                Official Website <FaArrowRight className="text-xs" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-2xl hover:bg-primary/90 transition-colors duration-200 text-sm"
              >
                Apply With Us <FaCircleArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ──────────────────────────────────── */}
      <section className="py-12 bg-dark border-b border-white/10">
        <div className="container">
          <p className="text-white/70 text-lg leading-relaxed max-w-4xl mx-auto text-center">
            {university.intro}
          </p>
        </div>
      </section>

      {/* ── QUICK FACTS ──────────────────────────────────── */}
      <section className="py-16 bg-light" id="quick-facts">
        <div className="container">
          <div className="mb-10">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wide flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-secondary rounded-md" />
              At a Glance
            </span>
            <h2>University Quick Facts</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {university.quickFacts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-dark/10 p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-primary/10 text-primary text-lg mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon />
                </div>
                <p className="text-xs text-dark/50 uppercase tracking-wide font-semibold">
                  {label}
                </p>
                <h5 className="mt-1">{value}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS OFFERED ─────────────────────────────── */}
      <section className="py-16" id="programs">
        <div className="container">
          <div className="mb-10">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wide flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-secondary rounded-md" />
              Academic Offerings
            </span>
            <h2>Programs Offered</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {university.programs.map(({ name, level }) => (
              <div
                key={name}
                className="group relative bg-white border border-dark/10 rounded-2xl p-5 hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <FaGraduationCap className="text-primary text-xl mb-3" />
                <h6 className="font-semibold leading-snug">{name}</h6>
                <span className="mt-2 inline-block text-xs font-medium text-dark/50 bg-light px-2 py-1 rounded-md">
                  {level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADMISSION REQUIREMENTS ───────────────────────── */}
      <section className="py-16 bg-light" id="requirements">
        <div className="container">
          <div className="mb-10">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wide flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-secondary rounded-md" />
              How to Qualify
            </span>
            <h2>Admission Requirements</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {university.requirements.map(({ step, title, desc }) => (
              <div
                key={step}
                className="bg-white rounded-2xl border border-dark/10 p-6 hover:shadow-xl transition-shadow duration-300 flex gap-5"
              >
                <span className="text-4xl font-heading font-bold text-primary/15 shrink-0 leading-none">
                  {step}
                </span>
                <div>
                  <h6 className="font-semibold">{title}</h6>
                  <p className="mt-2 text-sm text-dark/60 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TUITION & SCHOLARSHIP ────────────────────────── */}
      <section className="py-16" id="tuition">
        <div className="container">
          <div className="mb-10">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wide flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-secondary rounded-md" />
              Cost & Financial Aid
            </span>
            <h2>Tuition & Scholarships</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tuition card */}
            <div className="bg-dark text-white rounded-2xl p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white text-xl mb-6">
                <FaSackDollar />
              </div>
              <h3 className="text-white">Tuition Fees</h3>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/60 text-sm">
                    Undergraduate Programs
                  </span>
                  <span className="font-semibold text-primary">
                    {university.tuition.undergraduate} / yr
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/60 text-sm">
                    Graduate / Postgrad
                  </span>
                  <span className="font-semibold text-primary">
                    {university.tuition.graduate} / yr
                  </span>
                </div>
              </div>
              <p className="mt-6 text-sm text-white/40 leading-relaxed">
                {university.tuition.note}
              </p>
            </div>

            {/* Scholarship cards */}
            <div className="flex flex-col gap-4">
              {university.scholarships.map(
                ({ name, coverage, eligibility }) => (
                  <div
                    key={name}
                    className="bg-white border border-dark/10 rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                      <FaTrophy />
                    </div>
                    <div>
                      <h6 className="font-semibold">{name}</h6>
                      <span className="inline-block mt-1 text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {coverage}
                      </span>
                      <p className="mt-2 text-sm text-dark/60">{eligibility}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMPUS LIFE ──────────────────────────────────── */}
      <section className="py-16 bg-light" id="campus-life">
        <div className="container">
          <div className="mb-10">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wide flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-secondary rounded-md" />
              Life on Campus
            </span>
            <h2>Campus Life</h2>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {university.campusLife.map((item, i) => (
              <div
                key={item.caption}
                className="group relative rounded-2xl overflow-hidden "
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  width={500}
                  height={500}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                    <FaCheck className="text-primary text-xs" />
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ──────────────────────────── */}
      <section className="py-16" id="apply">
        <div className="container">
          <div className="mb-12">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wide flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-secondary rounded-md" />
              Your Roadmap
            </span>
            <h2>Application Process</h2>
          </div>

          <div className="relative">
            {/* connecting line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-dark/10 z-0" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {university.applicationSteps.map(
                ({ icon: Icon, step, title, desc }) => (
                  <div
                    key={step}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon circle */}
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white border-2 border-primary text-primary text-2xl shadow-md mb-4">
                      <Icon />
                    </div>
                    <span className="text-xs font-bold text-primary/40 tracking-widest mb-1">
                      STEP {step}
                    </span>
                    <h6 className="font-semibold">{title}</h6>
                    <p className="mt-2 text-xs text-dark/50 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ────────────────────────────────────── */}
      <CtaSection />
    </>
  );
};

export default UniversityDetailsPage;
