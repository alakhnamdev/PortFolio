"use client";

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const buttons = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar({ scrollToSection }: NavbarProps) {
  return (
    <nav className="grid lg:grid-cols-2 sm:grid-cols-1 bg-black text-white p-4 shadow-xl shadow-green-400/25 fixed w-full top-0 z-50">
      <h1 className="playfair text-4xl lg:text-left sm:text-center text-center font-semibold -mt-1">
        Alakh Namdev
      </h1>
      <div className="lg:flex sm:hidden hidden justify-end space-x-6">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(button)}
            className="hover:text-green-400 cursor-pointer"
          >
            {button}
          </button>
        ))}
      </div>
    </nav>
  );
}
