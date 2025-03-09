import React, { useEffect, useRef } from 'react'
import Lenis from "@studio-freight/lenis";

const Navbar = ({ section1, section2, section3 }) => {
  const lenis = useRef(null);

	const transitionText = (targetString, element, time) => {
    const alphabet =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ(())@@##&&++";
    const originalText = element.textContent;
    const maxLength = Math.max(originalText.length, targetString.length);
    const targetText = targetString.padEnd(maxLength, " ");
    const intervalTime = 85;
    const totalSteps = time / intervalTime;
    const stepsRemaining = Array.from({ length: maxLength }, () =>
      Math.floor(Math.random() * totalSteps)
    );
    const interval = setInterval(() => {
      let newText = "";
      for (let i = 0; i < maxLength; i++) {
        if (stepsRemaining[i] > 0) {
          newText += alphabet[Math.floor(Math.random() * alphabet.length)];
          stepsRemaining[i]--;
        } else {
          newText += targetText[i];
        }
      }
      element.textContent = newText;
      if (stepsRemaining.every((steps) => steps <= 0)) {
        clearInterval(interval);
        element.textContent = targetString;
      }
    }, intervalTime);
  };

	const hoverElementsEnter = (e) => {
    transitionText(e.target.getAttribute("hover-text"), e.target, 680);
  };
  const hoverElementsLeave = (e) => {
    transitionText(e.target.getAttribute("default-text"), e.target, 680);
  };

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.75,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: false,
    });
    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  const scrollTo = (section) => {
    if (section) {
      lenis.current.scrollTo(section.current, {
        immediate: false,
        duration: 0.9,
        easing: (t) => 1 - Math.pow(1 - t, 1.9)
      });
    };
  };
	
	return (
		<div id="Navbar">
			<p className="default-hover" hover-text="Gabin.A" default-text="Anquetil.G" onMouseEnter={(e) => hoverElementsEnter(e)} onMouseLeave={(e) => hoverElementsLeave(e)}>Anquetil.G</p>
			<ul>
				<li><a className="default-hover" hover-text="Pr(j3cts" default-text="Projects" onMouseEnter={(e) => hoverElementsEnter(e)} onMouseLeave={(e) => hoverElementsLeave(e)} onClick={() => scrollTo(section1)}>Projects</a></li>
				<li><a className="default-hover" hover-text="Ab)u+" default-text="About" onMouseEnter={(e) => hoverElementsEnter(e)} onMouseLeave={(e) => hoverElementsLeave(e)} onClick={() => scrollTo(section2)}>About</a></li>
				<li><a className="default-hover" hover-text="C(nt`ct" default-text="Contact" onMouseEnter={(e) => hoverElementsEnter(e)} onMouseLeave={(e) => hoverElementsLeave(e)} onClick={() => scrollTo(section3)}>Contact</a></li>
			</ul>
		</div>
	)
}

export default Navbar