import { useState } from "react";
import { motion } from "framer-motion";
import { asset } from "../utils/asset";
import { labels as t } from "../data/portfolioData";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: asset("images/CV-DETE.pdf"), label: t.download, external: true },
    { href: "#about", label: t.about },
    { href: "#experience", label: t.experience },
    { href: "#skills", label: t.skills },
    { href: "#projects", label: t.projects },
    { href: "#certifications", label: t.certifications },
    { href: "#education", label: t.education },
    { href: "#contact", label: t.contact },
  ];

  const extra = (l) =>
    l.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
      <nav className="flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur">
        <div className="text-center">
          <h1 className="font-bold text-xl">Martine Fifame DETE</h1>
          <p className="inline-block mt-1 px-3 py-0.5 rounded-full bg-white/20 text-sm sm:text-base font-semibold text-white tracking-wide">
            {t.title}
          </p>
        </div>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className="hidden lg:flex gap-6 text-sm font-semibold">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-pink-300" {...extra(l)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-indigo-700 lg:hidden flex flex-col gap-4 p-6 text-sm font-semibold"
          >
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover:text-pink-300"
                  onClick={() => setOpen(false)}
                  {...extra(l)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </header>
  );
}