import Project from "./Project";
import {useScroll} from "../ScrollAnimationContext"

const Projects = () => {
  const {scrollY} = useScroll()
  return (
    <section className="flex flex-wrap  justify-center gap-4 mt-4">
      <h2 className={`transition-all duration-1000 text-2xl font-bold p-4 w-full text-center md:text-4xl ${scrollY >= 827? "scale-100" : "scale-0"}`}>Projects</h2>
      <Project
        imagePath={"./segurosconale.png"}
        linkToRepository={"https://github.com/victorsegovi/seg_con_ale"}
        linkToProject={"http://segurosconale.com"}
        projectTitle={"Seguros Con Ale"}
        projectDescription={"Landing Page I made for a client who has an insurance company. It was made using React and TailwindCSS."}
      />
    </section>
  );
};

export default Projects;
