import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 pb-16">
        <div className="lg:col-span-2">
          <Link href="/" className="relative w-auto h-16 inline-block mb-4">
            <Image
              src="/logo.png"
              alt="Wow Consultancy and Visa"
              height={64}
              width={100}
              className="h-full w-auto object-contain"
            />
          </Link>
          <p className="text-white/70 max-w-xs">
            Your trusted partner in shaping international academic careers. We
            provide end-to-end guidance for studying abroad.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors duration-200"
            >
              <FaFacebookF className="text-sm" />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors duration-200"
            >
              <FaXTwitter className="text-sm" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors duration-200"
            >
              <FaInstagram className="text-sm" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors duration-200"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>
        </div>

        <div>
          <h6 className="text-white mb-6">Quick Links</h6>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/study-in-korea"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                Study in Korea
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-white mb-6">Support</h6>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/contact"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-white mb-6">Contact Info</h6>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <FaLocationDot className="text-primary mt-1 shrink-0" />
              <span className="text-white/70">
                Level 7, 1101/1, Jamila Latif Tower, Ahead of Adabor Police
                Station, Ring Road, Shyamoli, Dhaka, Bangladesh, 1207
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-primary shrink-0" />
              <a
                href="tel:+8801700000000"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                +880 1700-000000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary shrink-0" />
              <a
                href="mailto:info@wowconsultancy.com"
                className="text-white/70 hover:text-primary transition-colors duration-200"
              >
                info@wowconsultancy.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container">
          <p className="text-white/70 text-sm text-center">
            &copy; {currentYear} Wow Consultancy and Visa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
