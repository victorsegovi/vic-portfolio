import { useState, useEffect } from "react";

export const Cover = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [place, setPlace] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    setTimeout(()=>{
      setPlace(true)
    }, 500)
  }, []);

  return (
    <section className="h-screen flex flex-col justify-top items-center gap-16 relative overflow-hidden">
      <h1 className={` text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black transition-all duration-[1000ms] absolute ${place? "bottom-2/4": "bottom-0 translate-y-[300%]"} ease-out`} style={{ transform: `translateY(${scrollPosition * 1.5}px)`}}>
        UX/UI Designer
        <br />
        <span
          className={`transition-opacity duration-[2500ms] text-[#F8F9FA] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{textShadow: "0 0 10px #26994B"}}
        >
          & Frontend Developer
        </span>
      </h1>
      <div className={`hover:bg-[#212529] transition-all rounded-full duration-[100ms] flex items-center justify-center border-2 border-[#212529] p-8 max-h-12 max-w-12 cursor-pointer hover:text-[#F8F9FA] absolute ${place? "bottom-1/3": "bottom-0 translate-y-[300%]"} ease-out`} style={{ transform: `translateY(${scrollPosition * 1.5}px)` }}
      >
        <i className="fa-solid fa-arrow-down text-3xl cursor-pointer"></i>
      </div>
    </section>
  );
};
