"use client"

import React, {useEffect, useState} from "react";

import Header from "@/components/Header";
import Top from "@/containers/Top";
import About from "@/containers/About";
import Projects from "@/containers/Projects";
import Capacity from "@/containers/Capacity";
import Contact from "@/containers/Contact";
import Footer from "@/components/Footer";

import 'animate.css';
import Blogs from "@/containers/Blogs";

export default function Home() {
  const [navBar, setNavBar] = useState("top");
  const [scrollValue, setScrollValue] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      scrollTo({top: -window.scrollY, behavior: "instant"});
    }
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      setScrollValue(prev => prev + delta);
    };

    window.addEventListener('wheel', handleScroll, {passive: false});

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const dictionary: { [key: number]: string } = {
      0: "top",
      1: "about",
      2: "projects",
      3: "capacity",
      4: "news",
      5: "contact",
      6: "footer"
    }
    let current = currentSlide;
    let MAX = 6;
    if (Math.abs(scrollValue) >= MAX) {
      if (scrollValue > 0) {
        if (current < MAX)
          current += 1;
      } else if (current > 0) {
        current -= 1;
      }
      if (current < 0) current = 0;
      if (current > MAX) current = MAX;
      setNavBar(dictionary[current]);
      scrollTo(0, current * viewportHeight);
      setCurrentSlide(current);
      setScrollValue(0);
    }
  }, [currentSlide, scrollValue]);
/*
  useEffect(() => {
    console.log("Current slide: ", currentSlide);
    console.log("Current navbar: ", navBar);
    console.log("Current scroll val: ", scrollValue);
  }, [currentSlide, navBar, scrollValue]);*/

  return (
    <>
      <Header location={navBar} setNavBar={setNavBar}/>
      <main className="w-screen bg-white">
        <Top navBar={navBar} setNavBar={setNavBar}/>
        <About navBar={navBar} setNavBar={setNavBar}/>
        <Projects navBar={navBar} setNavBar={setNavBar}/>
        <Capacity navBar={navBar} setNavBar={setNavBar}/>
        <Blogs navBar={navBar} setNavBar={setNavBar}/>
        <Contact navBar={navBar} setNavBar={setNavBar}/>
      </main>
      <Footer navBar={navBar} setNavBar={setNavBar}/>
    </>
  );
}
