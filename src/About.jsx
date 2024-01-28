import { useEffect, useState } from "react";

export const About = () => {

  const [show, setShow] = useState(false)

  window.addEventListener('scroll', ()=>{
    const position = window.scrollY
    if (position >= 700){
      setShow(true);
    }else{
      setShow(false)
    }
  })

  return (
    <section className="flex p-10 justify-between items-center h-screen overflow-hidden relative">
      <div className="flex flex-col justify-between gap-10 relative w-1/2 h-96">
        <h2 className={`text-6xl font-bold absolute transition-all duration-[1500ms] top-1/4 ease-in-out ${show? "-left-0": "-left-full"}`}>About Me</h2>
        <p className={`text-2xl absolute transition-all duration-[750ms] top-2/4 ease-in-out ${show? "-left-0": "-left-full"}`}>
          For the past two years, I've been fueled by the<br />
          thrill of transforming ideas into engaging and<br />
          intuitive web experiences. As a Frontend Developer,<br />
          I'm passionate about bridging the gap between<br />
          design and functionality, crafting pixel-perfect<br />
          interfaces that are both beautiful and user-friendly.
        </p>
      </div>
      <img src="./src/assets/victor-avatar.png" alt="Victor Avatar" className={`grayscale hover:grayscale-0 transition-all duration-[1500ms] cursor-pointer drop-shadow-2xl h-96 absolute ease-in-out ${show? "-right-0": "-right-full"}`}/>
    </section>
  );
};
