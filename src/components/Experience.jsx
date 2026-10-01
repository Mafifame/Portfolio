import { experiences, labels as t } from "../data/portfolioData";

const borderColors = [
  "border-pink-500",
  "border-indigo-500",
  "border-emerald-500",
  "border-amber-500",
  "border-sky-500",
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-r from-indigo-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-10">{t.experience}</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, i) => (
            <div
              key={exp.role + exp.period}
              className={`bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg border-l-4 ${
                borderColors[i % borderColors.length]
              } ${exp.featured ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-4">
                <span className="font-semibold">{exp.period}</span> – {exp.company}
              </p>
              <ul className="list-disc list-outside pl-5 text-sm leading-relaxed space-y-2">
                {exp.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}