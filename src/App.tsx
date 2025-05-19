import { TextUtils } from "./utils";

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

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
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

  /* Constants */
  const portfolioSections = ["projects", "skills", "blog", "about"];

  return (
    <div
      id="smooth-wrapper"
      className="flex flex-col w-full min-h-screen font-montserrat"
    >
      <div id="smooth-content">
        <div className="flex w-full h-screen justify-center items-start">
          {/* Header Section */}
          <header className="flex flex-col h-full w-full justify-center items-center px-4 md:px-24">
            <section className="max-w-[1640px] h-12 flex w-full flex-col">
              <div className="flex w-full justify-between items-center p-4 gap-8">
                <button className="text-2xl font-black cursor-pointer hover:opacity-50 opacity-100 duration-500">
                  BRSNRM
                </button>
                {/* Header Buttons */}
                <div className="flex justify-start grow gap-8">
                  {portfolioSections.map((section) => (
                    <button
                      className="font-semibold opacity-50 hover:opacity-100 duration-500 cursor-pointer"
                      key={section}
                    >
                      {TextUtils.formatStringToTitleCase(section)}
                    </button>
                  ))}
                </div>

                <button className="border-1 p-2 px-4 rounded-2xl cursor-pointer">
                  Contact
                </button>
              </div>
              {/* Divider */}
              <div className="flex w-full border-b divider" />
            </section>

            <section className="flex flex-col justify-center items-center grow">
              <div className="headline primary text-5xl font-semibold">
                Building DOM Elements
              </div>
              <p className="headline text-9xl font-semibold">with passion.</p>
              <p className="headlineDesc text text-2xl mt-8 opacity-50">
                Whether it's crafting structure or fine-tuning every byte.
              </p>
            </section>

            {/* Scroll Down Button */}
            <div className="h-44 flex w-full justify-center items-center">
              <button className="cursor-pointer flex flex-col">
                <p>See More</p>
                <p className="rotate-90">➞</p>
              </button>
            </div>
          </header>
        </div>

        {/* Works Section */}
        <div className="flex w-full justify-center items-center mt-44">
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
