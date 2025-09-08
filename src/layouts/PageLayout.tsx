import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900">
      {/* Navigation */}
            <nav className="w-full py-4 px-8 flex justify-between items-center shadow-md sticky top-0 bg-white dark:bg-gray-900 z-50">
        <span className="text-2xl font-extrabold text-blue-600">
            <span className="hidden md:inline">Alpha-Primus</span>
            <span className="inline md:hidden">AP</span>
        </span>
        <div className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
        {/* Optional hamburger for mobile menu later */}
        </nav>


      {/* Main content */}
      <main className="overflow-x-hidden">{children}</main>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Alpha-Primus. All rights reserved.
      </footer>
    </div>
  );
};

export default PageLayout;
