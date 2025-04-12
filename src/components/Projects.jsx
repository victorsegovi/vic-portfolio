import Project from "./Project";
import {useScroll} from "../ScrollAnimationContext"

const Projects = () => {
  const {scrollY} = useScroll()
  return (
    <section className="flex flex-wrap  justify-center gap-4 mt-4">
      <h2 className={`transition-all duration-1000 text-2xl font-bold p-4 w-full text-center md:text-4xl ${scrollY >= 827? "scale-100" : "scale-0"}`}>Projects</h2>
      <Project
        imagePath={"./cashflow-site.png"}
        linkToRepository={"https://github.com/victorsegovi/cashflow-site"}
        linkToProject={"https://cashflowbot.net"}
        projectTitle={"Cashflow"}
        projectDescription={"My most ambitious and complete project. Made using Next.js TailwindCSS, Supabase, Auth.js and Paypal API integration."}
      />
      <Project
        imagePath={"./segurosconale.png"}
        linkToRepository={"https://github.com/victorsegovi/seg_con_ale"}
        linkToProject={"https://segurosconale.com"}
        projectTitle={"Seguros Con Ale"}
        projectDescription={"Landing Page I made for a client who has an insurance company. It was made using React and TailwindCSS."}
      />
      <Project imagePath={"./maricarmeninsurance.png"}
      linkToRepository={"https://github.com/victorsegovi/maricarmen"}
      linkToProject={"https://maricarmeninsurance.com"}
      projectTitle={"Maricarmen Insurance"}
      projectDescription={"Another Landing Page made for a client who runs an insurance company. Made using React and TailwindCSS."}/>
      <Project imagePath={"./alterhem.png"}
      linkToRepository={"https://github.com/victorsegovi/alterhem"}
      projectTitle={"AlterHem"}
      linkToProject={"https://alterhem.com"}
      projectDescription={"A web page I made for a client who is a financial and accounting advicer"}/>
    </section>
  );
};

export default Projects;
