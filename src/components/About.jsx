import { useScroll } from "../ScrollAnimationContext";

const About = () => {
  const {scrollY} = useScroll()
  return (
    <section className="min-h-calc-content relative overflow-hidden ">
      <div className={` flex flex-col gap-4 absolute transition-all duration-1000 w-[320px] ${scrollY >= 515? "bottom-0 left-1/2 -translate-x-1/2 px-4": "bottom-0 -left-full -translate-x-0"} md:w-[unset] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[400px]`}>
        <h2 className="text-2xl font-bold md:text-4xl">About me</h2>
        <p className="md:text-lg">
          For the past two years, I've been fueled by the thrill of transforming
          ideas into engaging and intuitive web experiences. As a Frontend
          Developer, I'm passionate about bridging the gap between design and
          functionality, crafting pixel-perfect interfaces that are both
          beautiful and user-friendly.
        </p>
      </div>
      <div className={`transition-all duration-1000 absolute h-1/2 flex justify-center w-[320px] ${scrollY >= 515? "left-1/2 -translate-x-1/2": " left-full -translate-x-0"} ${scrollY >= 515 && window.innerWidth >= 640 ? "": ""} lg:w-[500px]`}>
        <img src="./victor-avatar.png" alt="Victor Avatar" className="grayscale hover:grayscale-0 transition-all duration-300 h-full"/>
      </div>
    </section>
  );
};

export default About;
