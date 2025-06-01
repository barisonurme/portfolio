/* GSAP */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import Works from "./sections/works";
import { useEffect } from "react";
import Skills from "./sections/skills";
import About from "./sections/about";
import Contact from "./sections/contact";
import Header from "./sections/header";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollSmoother.create({
        smooth: 0.1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      });

      const headline = SplitText.create(".headline");
      const desc = SplitText.create(".headlineDesc");

      gsap.timeline().from(headline.chars, {
        duration: 2.5,
        opacity: 0,
        ease: "power1.inOut",
        stagger: { from: "center", each: 0.04 },
      });
      gsap.timeline({ delay: 1 }).from(desc.chars, {
        duration: 2.5,
        opacity: 0,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className="flex flex-col w-full min-h-screen font-montserrat"
    >
      {/* Film Grain */}
      <div
        className="z-50 bg-repeat flex w-full h-screen absolute pointer-events-none opacity-50"
        style={{
          backgroundImage: 'url("/images/filmGrain.png")',
        }}
      />

      <div id="smooth-content" className="lg:p-0 p-12">
        <div className="flex w-full h-screen justify-center items-start">
          {/* Header Section */}
          <Header />
        </div>

        {/* Works Section */}
        <div className="flex w-full justify-center items-center mt-44 z-50">
          <Works />
        </div>

        {/* Skills Section */}
        <div className="flex w-full justify-center items-center mt-44">
          <Skills />
        </div>

        {/* About Section */}
        <div className="flex w-full justify-center items-center mt-44">
          <About />
        </div>

        {/* About Section */}
        <div className="flex w-full justify-center items-center mt-44">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
