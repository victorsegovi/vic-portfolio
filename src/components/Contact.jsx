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

  const [isFocused1, setFocus1] = useState(false);
  const [isFocused2, setFocus2] = useState(false);
  const [isFocused3, setFocus3] = useState(false);

  const handleClick1 = () => {
    setFocus1(true);
  };
  const handleClick2 = () => {
    setFocus2(true);
  };
  const handleClick3 = () => {
    setFocus3(true);
  };

  return (
    <section className="min-h-calc-content relative w-full overflow-hidden">
      <div
        className={` transition-all duration-1000 absolute top-0 w-full px-4 py-1 sm:px-8 ${
          scrollY >= 1889 && window.innerWidth <= 640 ? "left-0" : "-left-full"
        } ${
          scrollY >= 1889 && window.innerWidth > 640
            ? "w-1/2 left-1/2 -translate-x-1/2"
            : ""
        } xl:w-1/3`}
      >
        <h4 className={`capitalize`}>My socials</h4>
        <div className="flex gap-4 text-2xl">
          <FaBehanceSquare />
          <FaGithub />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </div>
      <div
        className={` transition-all duration-1000 absolute top-16 w-full px-4 py-1 sm:px-8 flex flex-col gap-1 ${
          scrollY >= 1889 && window.innerWidth <= 640
            ? "right-0"
            : "-right-full"
        } ${
          scrollY >= 1889 && window.innerWidth > 640
            ? "w-1/2 right-1/2 translate-x-1/2"
            : ""
        } xl:w-1/3`}
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
      <form
        name="contact"
        method="post"
        data-netlify="true"
        className={` transition-all duration-1000 flex flex-col gap-4 absolute top-40 w-full px-4 py-1 sm:px-8 ${
          scrollY >= 1991 && window.innerWidth <= 640 ? "left-0" : "-left-full"
        } ${
          scrollY >= 1991 && window.innerWidth > 640
            ? "w-1/2 left-1/2 -translate-x-1/2"
            : ""
        } xl:w-1/3`}
      >
        <input type="hidden" name="form-name" value="contact" />
        <h4>Send me an email</h4>
        <div
          className={`${
            isDarkMode ? "" : "border-[#212529]"
          } border rounded-md flex relative`}
        >
          <label
            htmlFor="name"
            className={`flex justify-center items-center gap-2 absolute -translate-y-1/2 left-2 p-1 transition-all duration-300 ${
              isFocused1 ? "-top-0 scale-90" : "top-1/2"
            } ${isDarkMode ? "bg-[#212529]" : "bg-[#F8F9FA]"}`}
          >
            <IoPersonOutline />
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            className="z-50 w-full bg-transparent p-2 focus:ring-0 outline-none"
            onClick={handleClick1}
          />
        </div>
        <div
          className={`${
            isDarkMode ? "" : "border-[#212529]"
          } border rounded-md flex relative`}
        >
          <label
            htmlFor="email"
            className={`flex justify-center items-center gap-2 absolute -translate-y-1/2 left-2 p-1 transition-all duration-300 ${
              isFocused2 ? "-top-0 scale-90" : "top-1/2"
            } ${isDarkMode ? "bg-[#212529]" : "bg-[#F8F9FA]"}`}
          >
            <MdAlternateEmail />
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            className="z-50 w-full bg-transparent p-2 focus:ring-0 outline-none"
            onClick={handleClick2}
          />
        </div>
        <div
          className={`${
            isDarkMode ? "" : "border-[#212529]"
          } border rounded-md flex relative`}
        >
          <label
            htmlFor="message"
            className={`flex justify-center items-center gap-2 absolute -translate-y-1/2 left-2 p-1 transition-all duration-300 ${
              isFocused3 ? "top-0 scale-90" : "top-4"
            } ${isDarkMode ? "bg-[#212529]" : "bg-[#F8F9FA]"}`}
          >
            <AiOutlineMessage />
            Message
          </label>
          <textarea
            name="message"
            required
            autoComplete="off"
            id=""
            cols="30"
            rows="4"
            className="z-50 w-full bg-transparent p-2 focus:ring-0 outline-none"
            onClick={handleClick3}
          ></textarea>
        </div>
        <button
          className={`transition-all duration-200 cursosr-pointer hover:scale-105 capitalize border rounded-md p-4 ${
            isDarkMode
              ? "hover:bg-[#F8F9FA] hover:text-[#212529]"
              : "border-[#212529] hover:bg-[#212529] hover:text-[#F8F9FA]"
          }`}
        >
          Send message <IoSend className="inline" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
