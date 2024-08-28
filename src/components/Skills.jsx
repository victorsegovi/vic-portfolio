import { FaFigma, FaGitAlt, FaHtml5, FaCss3, FaJsSquare, FaReact, FaGithub } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si";
import {useScroll} from "../ScrollAnimationContext"

const Skills = ()=>{
    const {scrollY} = useScroll()
    return(
        <section className={`p-4 text-2xl min-h-calc-content text-center flex flex-col items-center justify-center gap-16 sm:p-8 xl:p-24`}>
            <h2 className={`font-bold transition-all duration-1000 ${scrollY >= 1350? "opacity-100": "opacity-0"} md:text-4xl`}>Skills</h2>
            <div className={`flex transition-all duration-500 justify-between items-center text-8xl gap-4 flex-wrap ${scrollY >= 1350? "w-full": "w-[1px]"}`}>
                <FaFigma className="hover:scale-125 hover:text-[#a257ff] cursor-pointer transition-all duration-300"></FaFigma>
                <FaHtml5 className="hover:scale-125 hover:text-[#dd4b25] cursor-pointer transition-all duration-300"></FaHtml5>
                <FaCss3 className="hover:scale-125 hover:text-[#254bdd] cursor-pointer transition-all duration-300"></FaCss3>
                <FaJsSquare className="hover:scale-125 hover:text-[#f7d800] cursor-pointer transition-all duration-300"></FaJsSquare>
                <FaReact className="hover:scale-125 hover:text-[#00caf7] cursor-pointer transition-all duration-300"></FaReact>
                <SiTailwindcss className="hover:scale-125 hover:text-[#37bcf8] cursor-pointer transition-all duration-300"></SiTailwindcss>
                <FaGithub className="hover:scale-125 hover:text-[#3c71bd] cursor-pointer transition-all duration-300"></FaGithub>
                <FaGitAlt className="hover:scale-125 hover:text-[#d74935] cursor-pointer transition-all duration-300"></FaGitAlt>
            </div>
        </section>
    )
}

export default Skills