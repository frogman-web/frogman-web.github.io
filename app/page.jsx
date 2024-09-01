"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";

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
      <About />
      {/* Temporary div */}
      <div className="h-[4000px]"></div>
    </div>
  )
}

export default Home