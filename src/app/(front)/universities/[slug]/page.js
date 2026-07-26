// app/universities/[slug]/page.jsx
import SectionHeader from "@/app/components/front/common/SectionHeader";
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
} from "react-icons/fa6";

const university = {
    logo: "/universities/snu.png",
    name: "Seoul National University",
    location: "Seoul, South Korea",
    established: "1946",
    website: "https://www.snu.ac.kr",
    intro:
        "Seoul National University is one of South Korea's most prestigious research universities, known for academic excellence, a diverse international community, and strong industry connections across engineering, business, and the sciences.",
    coverImage: "/universities/snu-cover.jpg",
    quickFacts: [
        { icon: FaLocationDot, label: "Location", value: "Seoul, South Korea" },
        { icon: FaGraduationCap, label: "Programs", value: "120+ Programs" },
        { icon: FaEarthAsia, label: "International Students", value: "3,500+" },
        { icon: FaSackDollar, label: "Tuition", value: "$4,000 - $8,000/yr" },
        { icon: FaLanguage, label: "Language", value: "Korean / English" },
        { icon: FaTrophy, label: "Ranking", value: "#1 in South Korea" },
    ],
    programs: [
        "Computer Science",
        "Business Administration",
        "Mechanical Engineering",
        "Design",
        "AI & Data Science",
        "Economics",
    ],
    requirements: [
        "Academic Certificate & Transcript",
        "Valid Passport Copy",
        "IELTS / TOPIK Score",
        "Statement of Purpose (SOP)",
        "Recommendation Letter",
        "Passport-Size Photo",
    ],
    tuitionFee: "$4,000 - $8,000 per year, depending on the program and college.",
    scholarship:
        "Merit-based and government-funded scholarships available, covering up to 100% tuition for eligible international students.",
    campusLife: [
        { image: "/universities/snu-campus.jpg", caption: "Campus" },
        { image: "/universities/snu-library.jpg", caption: "Library" },
        { image: "/universities/snu-dormitory.jpg", caption: "Dormitory" },
        { image: "/universities/snu-lab.jpg", caption: "Laboratory" },
    ],
    applicationSteps: [
        { icon: FaFileCircleCheck, title: "Apply" },
        { icon: FaMagnifyingGlass, title: "Review" },
        { icon: FaUserGraduate, title: "Admission" },
        { icon: FaPassport, title: "Visa" },
        { icon: FaPlane, title: "Fly" },
    ],
};

const UniversityDetailsPage = () => {
    return (
        <>
            {/* University Overview */}
            <section className="pt-32 pb-16 lg:pt-44">
                <div className="container">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src={university.coverImage}
                                alt={university.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <div className="relative w-20 h-20">
                                <Image
                                    src={university.logo}
                                    alt={`${university.name} logo`}
                                    fill
                                    sizes="80px"
                                    className="object-contain"
                                />
                            </div>

                            <h1 className="mt-6">{university.name}</h1>

                            <p className="text-primary font-medium mt-2">
                                {university.location} • Established {university.established}
                            </p>

                            <p className="mt-6 text-dark/70">{university.intro}</p>


                            <a href={university.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary text-white font-medium uppercase tracking-wide px-8 py-3.5 rounded-md mt-8 hover:bg-primary/90 transition-colors duration-200"
                            >
                                Official Website <FaArrowRight className="text-sm" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Facts */}
            <section className="py-16 bg-light">
                <div className="container">
                    <SectionHeader subTitle="Quick Facts" title="At a Glance" className="mb-12 lg:mb-16" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {university.quickFacts.map((fact) => (
                            <div
                                key={fact.label}
                                className="flex items-center gap-4 bg-white rounded-2xl border border-dark/10 p-6"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl shrink-0">
                                    <fact.icon />
                                </div>
                                <div>
                                    <p className="text-sm text-dark/70">{fact.label}</p>
                                    <h6 className="mt-0.5">{fact.value}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Offered */}
            <section className="py-16">
                <div className="container">
                    <SectionHeader
                        subTitle="Programs"
                        title="Programs Offered"
                        highlight="Offered"
                        className="mb-12 lg:mb-16"
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {university.programs.map((program) => (
                            <div
                                key={program}
                                className="flex items-center gap-3 bg-white rounded-2xl border border-dark/10 px-6 py-5 hover:border-primary transition-colors duration-200"
                            >
                                <FaGraduationCap className="text-primary text-lg shrink-0" />
                                <h6>{program}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission Requirements */}
            <section className="py-16 bg-light">
                <div className="container">
                    <SectionHeader
                        subTitle="Requirements"
                        title="Admission Requirements"
                        highlight="Requirements"
                        description="Make sure you have the following documents ready before applying."
                        className="mb-12 lg:mb-16"
                    />

                    <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
                        {university.requirements.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 bg-white rounded-2xl border border-dark/10 px-5 py-4"
                            >
                                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                                    <FaCheck className="text-xs" />
                                </span>
                                <span className="font-medium text-dark">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tuition & Scholarship */}
            <section className="py-16">
                <div className="container">
                    <SectionHeader
                        subTitle="Cost & Aid"
                        title="Tuition & Scholarship"
                        highlight="Scholarship"
                        className="mb-12 lg:mb-16"
                    />

                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl border border-dark/10 p-8">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary text-2xl">
                                <FaSackDollar />
                            </div>
                            <h3 className="mt-6">Tuition Fee</h3>
                            <p className="mt-2">{university.tuitionFee}</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-dark/10 p-8">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary text-2xl">
                                <FaTrophy />
                            </div>
                            <h3 className="mt-6">Scholarship Available</h3>
                            <p className="mt-2">{university.scholarship}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Life */}
            <section className="py-16 bg-light">
                <div className="container">
                    <SectionHeader
                        subTitle="Campus Life"
                        title="Explore the Campus"
                        highlight="Campus"
                        className="mb-12 lg:mb-16"
                    />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {university.campusLife.map((item) => (
                            <div key={item.caption} className="group relative aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.caption}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                <p className="absolute bottom-4 left-4 text-white font-medium">{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-16">
                <div className="container">
                    <SectionHeader
                        subTitle="Get Started"
                        title="Application Process"
                        highlight="Process"
                        className="mb-12 lg:mb-16"
                    />

                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
                        {university.applicationSteps.map((step, index) => (
                            <div key={step.title} className="flex lg:flex-col items-center gap-4 lg:gap-3 lg:flex-1">
                                <div className="flex items-center gap-4 lg:flex-col lg:gap-3">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-xl shrink-0">
                                        <step.icon />
                                    </div>
                                    <h6>{step.title}</h6>
                                </div>

                                {index !== university.applicationSteps.length - 1 && (
                                    <FaArrowRight className="text-primary/40 text-xl rotate-90 lg:rotate-0 lg:mx-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default UniversityDetailsPage;