import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { useState } from "react";
useState
import { useDarkMode } from "../DarkModeContext";

const Header = ()=>{

    const {isDarkMode, setIsDarkMode} = useDarkMode()

    return(
        <header className="w-full flex justify-between items-center p-4 sticky top-0 backdrop-blur-md z-50 sm:px-8 xl:px-24">
            <h2 className="font-bold text-lg title cursor-pointer" onClick={()=>{
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            }}>Victor Segovia</h2>
            <div className={`transition-all duration-200 cursor-pointer hover:scale-110 ${isDarkMode? "hover:bg-[#F8F9FA] hover:text-[#212529]" : "border-[#212529] hover:bg-[#212529] hover:text-[#F8F9FA]"} relative w-12 h-12 border shadow-lg rounded-full overflow-hidden`} onClick={()=> setIsDarkMode(!isDarkMode)}>
                <IoSunnyOutline className={`text-2xl absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isDarkMode? "left-1/2": "left-full translate-x-1/2"}`}/>
                <FaRegMoon className={`text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isDarkMode? "left-full translate-x-1/2": "left-1/2" }`}/>
            </div>
        </header>
    )
}

export default Header