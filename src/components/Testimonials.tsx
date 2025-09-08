

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, TechCorp",
    feedback:
      "Working with Oluwagbotemi was amazing! His code is clean, efficient, and highly maintainable. Highly recommended.",
    avatar: "/assets/avatar1.png",
  },
  {
    name: "John Smith",
    role: "Product Manager, WebSolutions",
    feedback:
      "Oluwagbotemi’s portfolio impressed us immediately. His projects showcase real expertise and creativity.",
    avatar: "/assets/avatar2.png",
  },
  {
    name: "Mary Johnson",
    role: "CTO, InnovateX",
    feedback:
      "Professional, fast, and reliable. Every project delivered by him was top-notch.",
    avatar: "/assets/avatar3.png",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={testi.avatar}
              alt={testi.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <p className="italic mb-4">"{testi.feedback}"</p>
            <h3 className="font-semibold text-lg">{testi.name}</h3>
            <span className="text-gray-500 dark:text-gray-400">{testi.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
