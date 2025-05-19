/* GSAP */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { TextUtils } from "../utils";
import { useEffect, useRef } from "react";

/* Types */
type TWorkType = {
  projectName: string;
  desc: string;
  techStack: (
    | "reactJs"
    | "firebase"
    | "nextJs"
    | "typescript"
    | "drizzle"
    | "postgre"
  )[];
};

/* Constants */
const works: TWorkType[] = [
  {
    projectName: "TrainMate",
    desc: "Track your progress with ease.",
    techStack: ["reactJs", "firebase"],
  },
  {
    projectName: "OrderFood",
    desc: "Solution for Restaurants",
    techStack: ["nextJs", "typescript", "drizzle", "postgre"],
  },
  {
    projectName: "Pizzaria",
    desc: "Order&Track",
    techStack: ["reactJs", "firebase"],
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
          rotationX: 10,
        },
        {
          opacity: 1,

          y: -100,
          rotationX: 0,
          x: 0,
          id: "example",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom 90%",
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
    <div
      ref={containerRef}
      className={`anim-${work.projectName} !z-50 flex flex-col ${
        wrapperClass ?? ""
      } w-full items-start h-[924px]`}
    >
      <div className="flex w-full">
        <div
          className={`${
            textWrapperClass ?? ""
          }  justify-center grow flex flex-col w-1/2`}
        >
          <p className="primary text-5xl font-semibold">{work.projectName}</p>
          <p className="text-8xl font-semibold mt-2">{work.desc}</p>

          <div className="grid gap-2 mt-12 grid-cols-12 pr-12">
            {work.techStack.map((stack) => (
              <div
                className="border opacity-50 p-2 px-4 rounded-md text-sm col-span-2"
                key={`${work.projectName}-${stack}`}
              >
                <div className="justify-center items-center flex w-full">
                  {TextUtils.formatStringToTitleCase(stack)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <img
            className="cursor-pointer hover:opacity-50 opacity-40 duration-500 hover:saturate-100 flex h-full w-full transition-all rounded-sm object-cover saturate-0"
            src="https://ui.shadcn.com/placeholder.svg"
          />
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
    <div className="max-w-[1640px]">
      <div className="w-full flex flex-col gap-24 justify-center items-center z-10 p-12">
        <div ref={worksTitleRef} className="flex flex-col gap-4">
          <div className="box flex justify-center items-center fonts text-5xl">
            A curated selection of my recent works.
          </div>
          <div className="box flex justify-center items-center fonts opacity-50">
            As a Front-End Developer, I specialize in web development, UI/UX
            design and game development, <br />
            creating visually engaging, responsive and interactive experiences
            across various platforms.
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-24 section mt-12">
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
