

const skillsData = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "TailwindCSS", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Python", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
        My Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {skill.name}
            </h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="mt-2 text-gray-600 dark:text-gray-300">
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
