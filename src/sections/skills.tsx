import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Skills = () => {
  const skillTags = ["All", "Web Dev", "Design", "Game Dev"];

  const skills = [
    // Web Dev
    { tag: skillTags[1], label: "Next.js" },
    { tag: skillTags[1], label: "React.js" },
    { tag: skillTags[1], label: "ES6" },
    { tag: skillTags[1], label: "TypeScript" },
    { tag: skillTags[1], label: "Rollup" },
    { tag: skillTags[1], label: "Drizzle" },
    { tag: skillTags[1], label: "Express" },
    { tag: skillTags[1], label: "Redux Toolkit" },
    { tag: skillTags[1], label: "Material UI" },
    { tag: skillTags[1], label: "Ant Design" },
    { tag: skillTags[1], label: "GraphQL" },
    { tag: skillTags[1], label: "Tailwind CSS" },
    { tag: skillTags[1], label: "Firebase" },
    { tag: skillTags[1], label: "Storybook" },
    { tag: skillTags[1], label: "TanStack Query" },
    { tag: skillTags[1], label: "Axios" },
    { tag: skillTags[1], label: "Yup" },
    { tag: skillTags[1], label: "Zod" },
    { tag: skillTags[1], label: "Atomic Design" },
    { tag: skillTags[1], label: "Rest Api" },
    { tag: skillTags[1], label: "PostgreSQL" },
    { tag: skillTags[1], label: "GSAP" },
    { tag: skillTags[1], label: "Apex Charts" },
    { tag: skillTags[1], label: "Responsive" },

    // Design
    { tag: skillTags[2], label: "Photoshop" },
    { tag: skillTags[2], label: "Illustrator" },
    { tag: skillTags[2], label: "InDesign" },
    { tag: skillTags[2], label: "After Effects" },

    // Game Dev
    { tag: skillTags[3], label: "C#" },
    { tag: skillTags[3], label: "Unity3D" },
    { tag: skillTags[3], label: "Unreal Engine" },
    { tag: skillTags[3], label: "Blender" },
  ];

  const [selectedTags, setSelectedTags] = useState("All");

  /* prettier-ignore */
  const filteredSkills = skills.sort((a, b) => a.label.localeCompare(b.label)).filter((skill) => selectedTags === "All" ? true : skill.tag === selectedTags);

  const [animationParent] = useAutoAnimate({
    disrespectUserMotionPreference: true,
  });

  return (
    <div className="max-w-[1640px] flex w-full justify-center p-4 lg:p-0">
      <div className="flex flex-col gap-4 justify-center items-center z-10 p-4 border divider rounded-lg px-4 lg:px-24 pb-24">
        <div className="flex flex-col gap-4 justify-center items-center -translate-y-1/2 bg-[#0e100f]">
          <div className="text-5xl md:text-9xl font-semibold text-center">
            Tech{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] inline-block text-transparent bg-clip-text">
              Stack
            </span>
          </div>
          <div className="text text-2xl opacity-50  text-center">
            Theese are some of technologies i'm using.
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center p-4 gap-8 rounded-md">
          <div className="flex gap-1 md:gap-8 w-full justify-center items-center">
            {skillTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTags(tag)}
                className={`${
                  selectedTags === tag
                    ? "divider text-[var(--color-primary)]"
                    : "border-[transparent]"
                } border p-2 px-4 text-xs opacity-50 rounded-md cursor-pointer font-semibold`}
              >
                <p>{tag}</p>
              </button>
            ))}
          </div>

          <div
            ref={animationParent}
            className="grid grid-cols-6 md:grid-cols-12 gap-8 opacity-100 w-full"
          >
            {filteredSkills.map((skill) => (
              <div
                className="col-span-3 w-full text-center h-16 flex justify-center items-center bg-zinc-900/30 opacity-50 hover:opacity-100 duration-500 rounded-md font-semibold "
                key={skill.label}
              >
                <p className="hover:text-[var(--color-primary)] select-none">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
