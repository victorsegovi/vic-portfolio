import { FaFigma } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills">
        <FaFigma />
        <FaHtml5 />
        <FaCss3Alt />
        <RiJavascriptFill />
        <FaReact />
        <SiTailwindcss />
        <BiLogoTypescript />
        <FaGitAlt />
        <FaGithub />
      </div>
    </section>
  );
}
