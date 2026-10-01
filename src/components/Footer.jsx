import { asset } from "../utils/asset";
import { labels as t } from "../data/portfolioData";

export default function Footer() {
  return (
    <>
      <footer className="bg-indigo-700 text-white text-center p-4">
        © {new Date().getFullYear()} Martine DETE - {t.title}
      </footer>
      <a href="#top" className="scroll-top">
        <img src={asset("images/toop.jpg")} alt="Haut" />
      </a>
    </>
  );
}