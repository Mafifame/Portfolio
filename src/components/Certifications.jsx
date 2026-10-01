import { motion } from "framer-motion";
import { certifications, labels as t } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-3xl font-bold text-pink-500 mb-6"
        >
          {t.certifications}
        </motion.h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <li key={c.title} className="bg-indigo-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-indigo-700">{c.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{c.issuer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}