import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {useScroll} from "../ScrollAnimationContext"

const Project = ({
  imagePath,
  imageAlt,
  projectTitle,
  projectDescription,
  linkToRepository,
  linkToProject,
}) => {

  const {scrollY} = useScroll()

  return (
    <div className={`transition-all duration-1000 m-4 rounded-md overflow-hidden shadow-2xl max-w-[320px] max-h-[480px] ${scrollY >= 827? "scale-95": "scale-0"} hover:-rotate-3 hover:scale-100`}>
      <img src={imagePath} alt={imageAlt} className="w-full"/>
      <div className="flex flex-wrap gap-2 p-4">
        <h4 className="text-lg font-bold">{projectTitle}</h4>
        <p className="">{projectDescription}</p>
        <div className="flex gap-2">
        <a href={linkToProject} target="_blank" className="text-3xl">
          <CiShare1 />
        </a>
        {linkToRepository && <a href={linkToRepository} target="_blank" className="text-3xl">
          <FaGithub />
        </a>}
        </div>
      </div>
    </div>
  );
};

export default Project