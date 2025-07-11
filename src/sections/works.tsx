/* GSAP */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { TextUtils } from "../utils";
import { useEffect, useRef } from "react";
import Gallery from "../components/gallery";

/* Types */
type TWorkType = {
  mediaPath?: { path: string; isYTVid?: boolean }[];
  projectName: string;
  desc: string;
  twColor?: string;
  hexColor?: string;
  longDesc?: string;
  techStack: (
    | "reactJs"
    | "firebase"
    | "nextJs"
    | "typescript"
    | "drizzle"
    | "postgre"
    | "React Native"
  )[];
};

/* Constants */
const works: TWorkType[] = [
  {
    projectName: "Pizzaria",
    desc: "Order&Track",
    techStack: ["reactJs", "firebase"],
    longDesc: `Pizzaria designed to only for Pizza restaurans to take order from customers and track it from admin panel.`,
    mediaPath: [
      { path: "/projects/pizzaria.jpg" },
      { path: "OoCiQ7yhu3k?si=4YQqsCP7SvdL7MfU", isYTVid: true },
    ],
    hexColor: "#ff002c",
    twColor: "text-[#ff002c]",
  },
  {
    projectName: "TrainMate",
    desc: "Track your progress with ease.",
    longDesc: `TrainMate is web application for users who want's to track their proggress when working out.`,
    techStack: ["reactJs", "firebase"],
    mediaPath: [{ path: "/projects/trainmate.gif" }],
    hexColor: "#4428f3",
    twColor: "text-[#4428f3]",
  },
  {
    projectName: "Chappter",
    desc: "Real Time Message App.",
    techStack: ["React Native", "firebase"],
    longDesc: `Chappter real-time chat applications developed with React Native.`,
    mediaPath: [
      { path: "/projects/chappter.gif" },
      { path: "sZIic2ByJas?si=AFuhGI25P6AKBPyO", isYTVid: true },
    ],
    hexColor: "#1e90ff",
    twColor: "text-[#1e90ff]",
  },
  {
    projectName: "OrderFood",
    desc: "Solution for Restaurants",
    techStack: ["nextJs", "typescript", "drizzle", "postgre"],
    longDesc: `Order Food Project helps restaurants easily add and update food prices. It also lets them create customized websites and menu designs to showcase their offerings.`,
    mediaPath: [{ path: "/projects/orderFood.jpg" }],
    hexColor: "#fc0029",
    twColor: "text-[#fc0029]",
  },
];

/* Work Comp */
const WorkComp = ({
  wrapperClass,
  textWrapperClass,
  index,
  work,
}: {
  index: number;
  wrapperClass?: string;
  textWrapperClass?: string;
  work: TWorkType;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      gsap.set(containerRef.current, {
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      });

      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          rotationX: 20,
        },
        {
          opacity: 1,
          y: -100,
          rotationX: 0,
          x: 0,
          id: "example",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%",
            end: "bottom 50%",
            scrub: true, // smoothly link scroll to animation progress
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    /* prettier-ignore */
    <div
      ref={containerRef}
      className={`anim-${work.projectName} !z-50 flex flex-col bg-zinc-900/20 border border-zinc-700/50 rounded-xl p-24 md:px-24 ${wrapperClass ?? ""} w-full items-center`}
    >
      <div className="flex flex-col lg:flex-row w-full h-full items-start md:items-center group gap-4 z-50">
        <div className={`${textWrapperClass ?? ""}  justify-center  flex flex-col w-full lg:w-1/2 `}>
          <p className={`text-5xl lg:text-4xl font-semibold ${work.twColor ?? "primary"}`}>
            {work.projectName}
          </p>
          <p className="text-5xl lg:text-7xl font-semibold mt-2">{work.desc}</p>
          {work.longDesc && (
            <p className="text-1xl lg:text-xl mt-2 opacity-50">
              {work.longDesc}
            </p>
          )}

          <div className="grid gap-2 mt-12 grid-cols-12 pr-12">
            {work.techStack.map((stack) => (
              <div className="border opacity-50 p-2 px-4 rounded-md text-sm col-span-6 md:col-span-3" key={`${work.projectName}-${stack}`}>
                <div className="justify-center items-center flex w-full whitespace-nowrap">
                  {TextUtils.formatStringToTitleCase(stack)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[420px] lg:w-1/2">
          <Gallery mediaPaths={work.mediaPath} />
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const worksTitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    document.fonts.ready.then(() => {
      if (!worksTitleRef.current) return;

      gsap.fromTo(
        worksTitleRef.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -300,
          id: "example",
          scrollTrigger: {
            trigger: worksTitleRef.current,
            start: "top 70%",
            end: "bottom 10%",
            scrub: true, // smoothly link scroll to animation progress
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="projects" className="max-w-[1640px] relative">
      <div className="w-full flex flex-col gap-24 justify-center items-center z-10 p-12">
        <div ref={worksTitleRef} className="flex flex-col gap-4 z-50">
          <div className="box flex justify-center items-center fonts text-5xl">
            A curated selection of my personal works.
          </div>
          <div className="box flex justify-center items-center fonts opacity-50">
            The projects listed below showcase personal works I have done
            outside of my professional career.
          </div>
        </div>
      </div>
      <section className="flex flex-col section mt-12 gap-12">
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        {works.map((work, index) => {
          return <WorkComp key={work.projectName} work={work} index={index} />;
        })}
      </section>
    </div>
  );
};

export default Works;
