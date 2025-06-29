import { Fragment, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const aboutMe = [
    {
      title: "Background",
      text: `I started my career in 2015 as a Graphic Designer, shaping visual
            identities and creating both digital and print assets across a range
            of mediums. I also spent a year studying graphic design in Czechia
            and later worked for nearly five years at a major e-commerce
            company, where I was responsible for UI banners, print materials,
            and motion graphics.`,
    },
    {
      title: "Front-End Development",
      text: `In 2022, I transitioned into Front-End Development to merge my
            design roots with a growing passion for building clean, engaging
            user interfaces. Now based in Ankara, I focus on creating
            responsive, accessible, and visually refined web applications.`,
    },
    {
      title: "Current Focus & Goals",
      text: `With a strong foundation in visual design and a solid grasp of
            modern frontend tools like React, Next.js, and Tailwind CSS, I aim
            to bridge the gap between aesthetics and functionality—crafting user
            experiences that are not only beautiful but also intuitive,
            performant, and scalable.`,
    },
  ];

  useLayoutEffect(() => {
    textRefs.current.forEach((el) => {
      if (!el) return;

      const words = el.querySelectorAll("span");
      gsap.fromTo(
        words,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    });

    titleRefs.current.forEach((el) => {
      if (!el) return;

      const titleSpans = el.querySelectorAll("span");
      gsap.fromTo(
        titleSpans,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div id="about" className="max-w-[1640px] flex w-full bg-[#0e100f] z-50">
      <div className="w-full flex lg:flex-row flex-col gap-1 lg:gap-8 justify-start items-start z-10 p-4 rounded-lg">
        <div className="flex flex-col gap-4 justify-start items-start py-24">
          <div className="text-5xl lg:text-7xl font-semibold">
            About <span className="primary">Me</span>
          </div>
          <div className="text text-2xl opacity-50">Information About me.</div>
        </div>

        <div className="flex h-[1px] lg:h-full border divider" />

        <div className="flex flex-col w-full h-full gap-1 lg:gap-8 justify-center items-center ">
          <div className="flex w-full flex-col rounded-md text-2xl leading-relaxed">
            {aboutMe.map((about, index) => {
              return (
                <Fragment key={about.title}>
                  <span
                    className="font-semibold primary"
                    ref={(el) => {
                      titleRefs.current[index] = el;
                    }}
                  >
                    {about.title.split("").map((char, _index) => (
                      <span
                        key={_index}
                        style={{
                          opacity: 0.5,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <div
                    className="inline-block"
                    ref={(el) => {
                      textRefs.current[index] = el;
                    }}
                  >
                    {about.text.split(" ").map((word, index) => (
                      <span
                        key={index + "_" + about.title}
                        style={{
                          opacity: 0.5,
                        }}
                        className="text-wrap"
                      >
                        {`${word} `}
                      </span>
                    ))}
                  </div>
                  <br />
                  <br />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
