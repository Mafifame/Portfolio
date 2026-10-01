import { motion } from "framer-motion";
import { projects, labels as t } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-gradient-to-r from-pink-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-3xl font-bold text-pink-500 mb-6"
        >
          {t.projects}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => {
            const Card = p.link ? motion.a : motion.div;
            const linkProps = p.link
              ? { href: p.link, target: "_blank", rel: "noreferrer" }
              : {};

            return (
              <Card
                key={p.name}
                {...linkProps}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                className="bg-white rounded-2xl shadow overflow-hidden"
              >
                {p.img ? (
                  <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
                ) : (
                  <div className="h-48 flex items-center justify-center text-6xl bg-gradient-to-br from-indigo-500 to-pink-500">
                    {p.icon}
                  </div>
                )}
                <div className="p-4">
                  {p.context && (
                    <p className="text-xs text-gray-500 mb-1">{p.context}</p>
                  )}
                  <h3 className="font-bold text-indigo-600">{p.name}</h3>
                  <p className="text-sm mt-2">{p.description}</p>
                  <p className="text-xs mt-3 text-pink-500 font-semibold">{p.tech}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}