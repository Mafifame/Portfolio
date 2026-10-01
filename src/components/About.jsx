import { aboutText, labels as t } from "../data/portfolioData";
import { asset } from "../utils/asset";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-3/5">
          <h2 className="text-3xl font-bold text-indigo-600 mb-2">{t.about}</h2>
          <p className="text-lg text-justify">{aboutText}</p>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <img
            src={asset("images/profil.jpeg")}
            alt="Profil"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}