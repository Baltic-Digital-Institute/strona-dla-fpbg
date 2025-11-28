"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-main text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-heading">
          Fundacja Przyjaźń bez Granic
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 font-body">
          <Link href="/" className="hover:text-accent-main">
            Strona Główna
          </Link>
          <Link href="/o-fundacji" className="hover:text-accent-main">
            O Fundacji
          </Link>
          <Link href="/strategia" className="hover:text-accent-main">
            Strategia
          </Link>
          <Link href="/projekty" className="hover:text-accent-main">
            Projekty
          </Link>
          <Link href="/aktualnosci" className="hover:text-accent-main">
            Aktualności
          </Link>
          <Link href="/kontakt" className="hover:text-accent-main">
            Kontakt
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 font-body">
          <Link href="/" className="block py-2 px-4 hover:bg-primary-dark">
            Strona Główna
          </Link>
          <Link href="/o-fundacji" className="block py-2 px-4 hover:bg-primary-dark">
            O Fundacji
          </Link>
          <Link href="/strategia" className="block py-2 px-4 hover:bg-primary-dark">
            Strategia
          </Link>
          <Link href="/projekty" className="block py-2 px-4 hover:bg-primary-dark">
            Projekty
          </Link>
          <Link href="/aktualnosci" className="block py-2 px-4 hover:bg-primary-dark">
            Aktualności
          </Link>
          <Link href="/kontakt" className="block py-2 px-4 hover:bg-primary-dark">
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
