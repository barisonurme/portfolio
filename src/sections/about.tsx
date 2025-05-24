const About = () => {
  return (
    <div className="max-w-[1640px] flex w-full">
      <div className="w-full flex lg:flex-row flex-col gap-1 lg:gap-8 justify-start items-start z-10 p-12 rounded-lg">
        <div className="flex flex-col gap-4 justify-start items-start py-24">
          <div className="text-5xl md:text-9xl font-semibold">
            About <span className="primary">Me</span>
          </div>
          <div className="text text-2xl opacity-50">Information About me.</div>
        </div>

        <div className="flex h-[1px] lg:h-full border divider" />

        <div className="flex flex-col w-full h-full gap-1 lg:gap-8 justify-center items-center ">
          <div className="flex flex-col rounded-md text-2xl leading-relaxed py-0 lg:py-24">
            <span className="font-semibold primary">Background</span>
            I started my career in 2015 as a Graphic Designer, shaping visual
            identities and creating both digital and print assets across a range
            of mediums. I also spent a year studying graphic design in Czechia
            and later worked for nearly five years at a major e-commerce
            company, where I was responsible for UI banners, print materials,
            and motion graphics.
            <br />
            <br />
            <span className="font-semibold primary">
              Front-End Development
            </span>{" "}
            In 2022, I transitioned into Front-End Development to merge my
            design roots with a growing passion for building clean, engaging
            user interfaces. Now based in Ankara, I focus on creating
            responsive, accessible, and visually refined web applications.
            <br />
            <br />
            <span className="font-semibold primary">
              Current Focus & Goals
            </span>{" "}
            With a strong foundation in visual design and a solid grasp of
            modern front-end tools like React, Next.js, and Tailwind CSS, I aim
            to bridge the gap between aesthetics and functionality—crafting user
            experiences that are not only beautiful but also intuitive,
            performant, and scalable.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
