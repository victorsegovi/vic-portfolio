import { FaBehanceSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useDarkMode } from "../DarkModeContext";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { useScroll } from "../ScrollAnimationContext";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const { scrollY } = useScroll();


  return (
    <section className="h-[200px] relative w-full overflow-hidden mt-16">
      <div
        className={`transition-all duration-1000 absolute top-0 w-full px-4 py-1 sm:px-8 ${
          scrollY >= 1889 && window.innerWidth <= 640 ? "left-0" : "-left-full"
        } ${
          scrollY >= 1889 && window.innerWidth > 640
            ? "w-1/2 left-1/2 -translate-x-1/2"
            : ""
        } md:w-1/2 lg:w-1/3`}
      >
        <h4 className={`capitalize`}>My socials</h4>
        <div className="flex gap-4 text-2xl">
          <a href="https://www.behance.net/victorsegovia1" target="_blank"><FaBehanceSquare /></a>
          <a href="https://github.com/victorsegovi" target="_blank"><FaGithub /></a>
          <a href="https://x.com/TuripeVictor" target="_blank"><FaXTwitter /></a>
          <a href="https://www.instagram.com/victorsegoviat/" target="_blank"><FaInstagram /></a>
        </div>
      </div>
      <div
        className={`transition-all duration-1000 absolute bottom-0 w-full px-4 py-1 sm:px-8 flex flex-col gap-1 ${
          scrollY >= 1889 && window.innerWidth <= 640
            ? "right-0"
            : "-right-full"
        } ${
          scrollY >= 1889 && window.innerWidth > 640
            ? "w-1/2 right-1/2 translate-x-1/2"
            : ""
        } md:w-1/2 lg:w-1/3`}
      >
        <h2 className="text-2xl">Let's get in touch</h2>
        <a
          href="https://wa.me/584144175655"
          target="_blank"
          className={`${
            isDarkMode ? "" : "border-[#212529]"
          } border cursor-pointer hover:scale-105 flex justify-center items-center gap-4 rounded-md py-3 text-lg capitalize hover:bg-[#39D855] hover:border-[#39D855] hover:text-[#FAFAFA] hover:font-semibold transition-all duration-200`}
        >
          <FaWhatsapp /> Send me a message
        </a>
      </div>
    </section>
  );
};

export default Contact;
