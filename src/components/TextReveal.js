import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function TextReveal() {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null)

    
    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }
    
    gsap.registerPlugin(ScrollTrigger);
    const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
    
  return (
    <>
    <div className="spacing-small"></div>
        <div className="reveal">
            <div ref={triggerRef}>
                {text.split("").map((letter, index) => (
                    <span className="reveal-text" key={index} ref={setlettersRef}>
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    <div className="spacing"></div>
    </>
  )
}

export default TextReveal