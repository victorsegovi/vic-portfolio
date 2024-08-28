import { FaArrowDown } from "react-icons/fa6";
import { useDarkMode } from "../DarkModeContext";
import {useScroll} from "../ScrollAnimationContext"

const Hero = () => {

  const { isDarkMode } = useDarkMode();
  const {scrollY} = useScroll()
  return (
    <section className="transition-all duration-300 relative min-h-calc-content w-full">
      <div className={`transition-all duration-1000 w-full flex flex-col gap-6 p-4 justify-center items-center absolute ${scrollY >= 0 && scrollY < 99 ? "top-1/2 -translate-y-1/2": scrollY >= 99 && scrollY < 201? "top-2/3 -translate-y-1/2" : scrollY >= 201 && scrollY < 302? "top-3/4": "-top-full overflow-hidden"}`}>
        <h1 className="font-black text-2xl sm:text-4xl md:text-6xl lg:text-8xl">
          UX/UI Designer &<br />
          <span>Frontend Developer</span>
        </h1>
        <div
          className={`transition-all duration-200 cursor-pointer border p-4 flex justify-center rounded-full hover:scale-110 ${
            isDarkMode ? "hover:bg-[#F8F9FA] hover:text-[#212529]" : "border-[#212529] hover:bg-[#212529] hover:text-[#F8F9FA]"
          } lg:text-4xl lg:p-6`}
        >
          <FaArrowDown  onClick={()=>{
            window.scrollTo({
              top: 622,
              left: 0,
              behavior: "smooth",
            })
          }}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
