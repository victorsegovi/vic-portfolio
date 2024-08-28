import { createContext, useState, useEffect, useContext } from "react";

const ScrollAnimationContext = createContext()

export function ScrollAnimationProvider({children}){
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
          console.log(scrollY, window.innerWidth)
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
    
        };
      }, [scrollY]);

    return(
        <ScrollAnimationContext.Provider value={{scrollY, setScrollY}}>
            {children}
        </ScrollAnimationContext.Provider>
    )
}

export function useScroll(){
    return useContext(ScrollAnimationContext)
}