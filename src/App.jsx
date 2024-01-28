import { Header } from "./Header";
import { Cover } from "./Cover";
import { About } from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export const App = () => {
  return (
    <div className="bg-bg-image-light relative ">
      <Header></Header>
      <Cover></Cover>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};
