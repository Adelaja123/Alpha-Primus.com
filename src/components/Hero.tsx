import { useState } from "react";

const Hero = () => {
  const [bgColor, setBgColor] = useState("bg-blue-600");

  const handleBgToggle = () => {
    const colors = ["bg-blue-600", "bg-pink-500", "bg-purple-500"];
    const nextColor = colors[(colors.indexOf(bgColor) + 1) % colors.length];
    setBgColor(nextColor);
  };

  return (
    <section
      id="hero"
      className={`${bgColor} min-h-screen flex flex-col justify-center items-center text-center text-white px-4 animate-fade-in transition-colors duration-1000`}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Alpha-Primus
      </h1>
      <p className="text-xl md:text-2xl mb-8">Code & Innovations Portfolio</p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Explore My Work
        </a>
        <button
          onClick={handleBgToggle}
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Change Background
        </button>
      </div>
    </section>
  );
};

export default Hero;
