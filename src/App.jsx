import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { useDarkMode } from "./DarkModeContext";
import { useScroll } from "./ScrollAnimationContext";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export const App = () => {
  const { isDarkMode } = useDarkMode();
  const {scrollY} = useScroll();

  return (
      <div
        className={`${
          isDarkMode
            ? "bg-[#212529] text-[#F8F9FA]"
            : "bg-[#F8F9FA] text-[#212529]"
        } relative transition-all duration-300`}
      >
        <Header></Header>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
  );
};
