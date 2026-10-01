import { motion } from "framer-motion";
import { skillGroups, automationTools, labels as t } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-3xl font-bold text-pink-500 mb-12"
        >
          {t.skills}
        </motion.h2>

        <div className="flex flex-col gap-14">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-bold text-indigo-600 mb-6 text-center">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-10 md:gap-14">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, type: "spring", stiffness: 120 }}
                    whileHover={{ rotate: 8, scale: 1.2, transition: { type: "spring", stiffness: 150 } }}
                    className="flex flex-col items-center gap-2 w-1/4 sm:w-1/4 md:w-auto"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                    />
                    <span className="text-xs sm:text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-6 text-center">
              Automatisation & outils
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {automationTools.map((tool) => (
                <span
                  key={tool.name}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm shadow"
                >
                  <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}