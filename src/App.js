import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HeroHeaderImg from "./components/HeroHeaderImg";
import CallToScroll from "./components/CallToScroll";
import CardProject from "./components/CardProject";
import CardAboutMe from "./components/CardAboutMe";
import Contact from "./components/Contact";

const App = () => {
  const lenis = useRef(null);
  const projectsPart = useRef(null);
  const aboutPart = useRef(null);
  const contactPart = useRef(null);
  const cube1 = useRef(null);
  const content = useRef(null);
  const [animatedLine, setAnimatedLine] = useState(false);
  const [imageBg1, setImageBg1] = useState(true);
  const [loaderIsEnd, setLoaderIsEnd] = useState(false);

  const handleLoaderEnd = () => {
    setLoaderIsEnd(true);  
  };

  const transformPage = () => {
    setAnimatedLine(true);
    setImageBg1(false);
    content.current.style.mixBlendMode = 'difference';
    content.current.style.color = '#ffd6f6';
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
    const handleScroll = ({ scroll }) => {
      if (scroll > window.innerWidth * 2 + window.innerHeight) {
        //
      } else if (scroll < window.innerHeight) {
        if (projectsPart.current)
          projectsPart.current.style.transform = `translate(0, 0)`;
      } else {
        if (projectsPart.current)
          projectsPart.current.style.transform = `translate(-${
            scroll - window.innerHeight
          }px, ${scroll - window.innerHeight}px)`;
      }
      if (cube1.current)
        cube1.current.style.left = `${190 + (scroll - window.innerHeight)}px`;
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
        // if (loaderIsEnd) {
        transformPage();
        // };
      };
    };
    lenis.current.on("scroll", handleScroll);
    return () => {
      lenis.current.off("scroll", handleScroll);
      lenis.current.destroy();
    };
  }, []);

  return (
    <div className="App">
      <div className="background1 background noise"></div>
      <div className="background2">
      <div className={animatedLine ? 'lineColor lineColor1 lineColor1Anim' : 'lineColor lineColor1'}></div>
      <div className={animatedLine ? 'lineColor lineColor2 lineColor2Anim' : 'lineColor lineColor2'}></div>
      <div className={animatedLine ? 'lineColor lineColor3 lineColor3Anim' : 'lineColor lineColor3'}></div>
      <div className={animatedLine ? 'lineColor lineColor4 lineColor4Anim' : 'lineColor lineColor4'}></div>
      <div className={animatedLine ? 'lineColor lineColor5 lineColor5Anim' : 'lineColor lineColor5'}></div>
      </div>
      <div id="heroHeader">
        <Navbar section1={projectsPart} section2={aboutPart} section3={contactPart} />
        <HeroHeaderImg image1={imageBg1} />
        <CallToScroll />
      </div>
      {!loaderIsEnd ? (
        <Loader onLoaderEnd={handleLoaderEnd} />
      ) : (
        <div className="content" ref={content}>
          <div className="projects" ref={projectsPart}>
            <div className="Cube1" ref={cube1}>
              <div className="cube">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
              </div>
            </div>
            <CardProject title="JUSTTALK" url1="https://anquetil-g.github.io/JustTalk-Front/" url2="https://github.com/Anquetil-G/JustTalk-Front" text="JustTalk is a chat application with only one chat in which you can make small talk. This project was developed entirely by me in HTML/CSS/JS for the frontend and in NodeJS with MongoDB for the backend. The goal of this project was to train myself to make a complete backend. PS: If you go to the site, the first loading may be long due to the DB." />
            <CardProject title="TODOGAME" url1="https://anquetil-g.github.io/TodoGame-Frontend/" url2="https://github.com/Anquetil-G/TodoGame-Frontend" text="This app is a mix between a todolist and a collection game. The goal is to complete tasks to collect coins and experience levels. These coins can be used to buy items that will allow you to put creatures in your collection. This app is made in HTML/CSS/JS, the database in NodeJS with MongoDB. PS: If you go to the site, the first loading may be long due to the DB." />
            <CardProject title="CINEMA APP" url1="https://anquetil-g.github.io/JustTalk-Front/" url2="https://anquetil-g.github.io/JustTalk-Front/" text="This app is a mix between a todolist and a collection game. The goal is to complete tasks to collect coins and experience levels. These coins can be used to buy items that will allow you to put creatures in your collection. This app is made in HTML/CSS/JS, the database in NodeJS with MongoDB. PS: If you go to the site, the first loading may be long due to the DB." />
          </div>
          <div className="about" ref={aboutPart}>
            <CardAboutMe />
          </div>
          <div className="contact" ref={contactPart}>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
