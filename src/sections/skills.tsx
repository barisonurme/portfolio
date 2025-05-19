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
    <div className="max-w-[1640px] flex w-full justify-center">
      <div className="flex flex-col gap-4 justify-center items-center z-10 p-4 border divider rounded-lg px-24 pb-24">
        <div className="flex flex-col gap-4 justify-center items-center -translate-y-1/2 bg-[#0e100f]">
          <div className="text-9xl font-semibold">
            Tech <span className="primary">Stack</span>
          </div>
          <div className="text text-2xl opacity-50">
            Theese are some of technologies i'm using.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-4 gap-8 rounded-md">
          <div className="flex gap-8">
            {skillTags.map((tag) => (
              <button
                onClick={() => setSelectedTags(tag)}
                className={`${
                  selectedTags === tag ? "divider" : "border-[transparent]"
                } border p-2 px-4 text-xs opacity-50 rounded-md cursor-pointer`}
              >
                <p>{tag}</p>
              </button>
            ))}
          </div>

          <div
            ref={animationParent}
            className="grid grid-cols-12 gap-8 opacity-50"
          >
            {filteredSkills.map((skill) => (
              <div
                className="col-span-3 w-44 h-16 flex justify-center items-center bg-zinc-900 rounded-md font-semibold "
                key={skill.label}
              >
                {skill.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
