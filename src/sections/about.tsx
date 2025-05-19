import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const About = () => {
  const [animationParent] = useAutoAnimate({
    disrespectUserMotionPreference: true,
  });

  return (
    <div className="max-w-[1640px] flex w-full">
      <div className="w-full flex gap-8 justify-start items-start z-10 p-4 rounded-lg">
        <div className="flex flex-col gap-4 justify-start items-start py-24">
          <div className="text-9xl font-semibold">
            About <span className="primary">Me</span>
          </div>
          <div className="text text-2xl opacity-50">Information About me.</div>
        </div>

        <div className="flex h-full border divider" />

        <div className="flex flex-col w-full h-full gap-8 justify-center items-center ">
          <div className="flex flex-col rounded-md text-2xl leading-relaxed py-24">
            <span className="font-semibold">Summary</span>
            I began my career in 2015 as a Graphic Designer, where I spent
            several years shaping visual identities and crafting digital and
            printable assets across diverse mediums.
            <br />
            <br />
            <span className="font-semibold">Front-End Development</span> to In
            2022, I transitioned into Front-End Development merge my design
            background with my growing passion for building intuitive and
            engaging user interfaces. Currently based in Ankara, I focus on
            developing responsive, accessible, and visually refined web
            applications.
            <br />
            <br />
            With a strong foundation in visual design and a deep understanding
            of modern front-end technologies, I aim to deliver clean,
            maintainable code and seamless user experiences. My toolkit includes
            technologies like React, Next.js, and Tailwind CSS, and I
            consistently stay aligned with evolving best practices in UI/UX,
            performance optimization, and scalable design systems.
            <br />
            <br />
            My goal is to bridge the gap between aesthetics and
            functionality—crafting digital experiences that are not only
            visually compelling but also intuitive, efficient, and future-ready.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
