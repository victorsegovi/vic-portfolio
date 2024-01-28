import { useState } from "react"
import Project from "./Project"

export default function Projects(){
    const [show, setShow] = useState(false)

    window.addEventListener('scroll', ()=>{
      const position = window.scrollY
      console.log(position)
      if (position >= 1100){
        setShow(true);
      }else{
        setShow(false)
      }
    })

    return (
        <section className="min-h-[150vh] flex justify-between relative overflow-hidden flex-wrap p-10 gap-12">
            <h2 className={`w-full text-6xl font-bold transition-all duration-[1500ms] ease-in-out absolute ${show? "left-10":"-left-full"}`}>Projects</h2>
            <Project show={show} duration={"duration-[1050ms]"} place={"top-[150px] left-10"} hidden={" top-[150px] -left-full"}></Project>
            <Project show={show} duration={"duration-[1550ms]"} place={"top-[150px] right-10"} hidden={" top-[150px] -right-full"}></Project>
            <Project show={show} duration={"duration-[2050ms]"} place={"bottom-0 left-10"} hidden={"bottom-0 -left-full"}></Project>
            <Project show={show} duration={"duration-[2550ms]"} place={"bottom-0 right-10"} hidden={"bottom-0 -right-full"}></Project>
        </section>
    )
}