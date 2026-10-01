import { education, labels as t } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-pink-500 mb-6">{t.education}</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <li key={e.title} className="bg-indigo-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-indigo-700">{e.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{e.school}</p>
              <p className="text-sm font-semibold mt-1">{e.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}