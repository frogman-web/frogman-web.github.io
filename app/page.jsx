"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Comparative from "./components/Comparative";
import Companies from "./components/Companies";
import Partners from "./components/Partners"
import About2 from "./components/About2";
import Important from "./components/important";
import Contact from "./components/Contact";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Services />
      <About2 />
      <Comparative />
      <Companies />
      <Partners />
      <Important />
      <Contact />
    </div>
  )
}

export default Home