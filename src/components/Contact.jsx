import { contacts, labels as t } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="bg-indigo-600 text-white p-10">
      <h2 className="text-2xl font-bold mb-8 text-center">{t.contact}</h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
        {contacts.map((c) => (
          <p key={c.label} className="flex items-center justify-center gap-3">
            <span>{c.icon}</span>
            {c.href ? (
              <a
                href={c.href}
                className="hover:text-pink-300 underline-offset-2 hover:underline"
                {...(c.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {c.label}
              </a>
            ) : (
              <span>{c.label}</span>
            )}
          </p>
        ))}
      </div>
    </section>
  );
}