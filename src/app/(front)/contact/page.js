// app/contact/page.jsx
import ContactForm from "@/app/components/front/widget/ContactForm";
import ContactInfo from "@/app/components/front/widget/ContactInfo";
import {
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

const contactInfo = [
    {
        icon: FaLocationDot,
        title: "Our Headquarters",
        lines: [
            "Level 7, 1101/1, Jamila Latif Tower,",
            "Ahead of Adabor Police Station, Ring Road,",
            "Shyamoli, Dhaka, Bangladesh, 1207",
        ],
    },
    {
        icon: FaPhone,
        title: "Phone Number",
        lines: ["+880 1700-000000", "Sat-Thu, 10am - 6pm"],
    },
    {
        icon: FaEnvelope,
        title: "Email Address",
        lines: ["admissions@wowconsultancy.com", "support@wowconsultancy.com"],
    },
];

const socials = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
    { icon: FaXTwitter, label: "Twitter", href: "#" },
];

const ContactPage = () => {
    return (
        <>
            <section className="pt-32 pb-16 bg-light">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div>
                            <h3>Contact Information</h3>
                            <p className="mt-4">
                                Whether you&apos;re curious about university admissions, visa processing, or our premium services, we&apos;re here to help.
                            </p>

                            <div className="flex flex-col gap-6 mt-8">
                                {contactInfo.map((item) => (
                                    <ContactInfo key={item.title} {...item} />
                                ))}
                            </div>

                            <div className="my-10">
                                <h6>Follow Us</h6>
                                <div className="flex gap-4 mt-4">
                                    {socials.map((social) => {
                                        const Icon = social.icon;
                                        return (

                                            <a key={social.label}
                                                href={social.href}
                                                aria-label={social.label}
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                                            >
                                                <Icon className="text-sm" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>

            <section className="pb-16">
                <div className="relative w-full h-[450px] rounded-2xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=Jamila+Latif+Tower+Ring+Road+Shyamoli+Dhaka+Bangladesh+1207&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our office location"
                    />
                </div>
            </section>
        </>
    );
};

export default ContactPage;