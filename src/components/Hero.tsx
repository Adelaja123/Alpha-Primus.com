const Hero = () => (
  <section
    id="hero"
    className="bg-blue-600 min-h-screen flex flex-col justify-center items-center text-center text-white px-4 animate-fade-in"
  >
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Alpha-Primus</h1>
    <p className="text-xl md:text-2xl mb-8">Code & Innovations Portfolio</p>
    <a
      href="#projects"
      className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
    >
      Explore My Work
    </a>
  </section>
);

export default Hero;
