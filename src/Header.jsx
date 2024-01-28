import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark(!isDark);
  }

  return (
      <header className="flex p-10 justify-between sticky z-10 top-0 backdrop-blur-xl rounded-b-xl">
        <h2 className="font-bold text-2xl">Victor Segovia</h2>
        <div
          className="relative p-1 rounded-full border border-[#212529] flex gap-1 overflow-hidden w-10 h-10"
          onClick={handleClick}
        >
          <FiMoon
            className={
              isDark
                ? "text-2xl cursor-pointer absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-500"
                : "text-2xl cursor-pointer absolute left-full top-1/2 -translate-y-1/2 transition-all duration-500"
            }
          />
          <IoSunnyOutline
            className={
              isDark
                ? "text-2xl cursor-pointer absolute left-full top-1/2 -translate-y-1/2 transition-all duration-500"
                : "text-2xl cursor-pointer absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-500"
            }
          />
        </div>
      </header>
  );
};
