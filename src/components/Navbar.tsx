import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 py-4 px-8 flex justify-between items-center shadow-md bg-white dark:bg-gray-900 z-50">
      {/* Brand */}
      <span className="text-2xl font-extrabold text-blue-600">
        <span className="hidden md:inline">Alpha-Primus</span>
        <span className="inline md:hidden">AP</span>
      </span>

      {/* Desktop Links */}
      <div className="space-x-6 hidden md:flex">
        {["About", "Skills", "Projects", "Testimonials", "Contact"].map(
          (link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-500 transition-colors"
            >
              {link}
            </a>
          )
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-gray-900 dark:text-gray-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {isOpen && (
          <div className="fixed top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center shadow-md animate-fade-in">
            {["About", "Skills", "Projects", "Testimonials", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="py-3 text-lg w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
