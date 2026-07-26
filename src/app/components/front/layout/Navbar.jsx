"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Universities", href: "/universities" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  const isTransparent = isHomePage && !scrolled && !menuOpen;
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white sticky top-0"
      }`}
    >
      <nav className="container flex items-center justify-between py-2">
        <Link href="/" className="relative w-auto h-18 shrink-0">
          <Image
            src="/logo.png"
            alt="Wow Consultancy and Visa"
            height={75}
            width={120}
            className="h-full w-auto object-contain"
          />
        </Link>

        <ul
          className={`fixed inset-0 flex flex-col items-center justify-center gap-8 bg-white transition-transform duration-300 lg:static lg:flex-row lg:gap-8 lg:bg-transparent lg:translate-x-0 lg:transition-none ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative text-xl lg:text-base font-medium transition-colors duration-200 hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                    isActive
                      ? "text-primary after:w-full"
                      : "text-dark after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-primary text-white font-medium uppercase tracking-wide text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 rounded-md hover:bg-primary/90 transition-colors duration-200"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden text-dark text-2xl z-[70]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
