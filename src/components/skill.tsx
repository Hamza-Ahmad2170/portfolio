import Image from "next/image";

import html from "@/assets/image/skill/html.svg";
import css from "@/assets/image/skill/css-3.svg";
import tailwind from "@/assets/image/tailwind-css-2.svg";
import js from "@/assets/image/skill/logo-javascript.svg";
import reactRouter from "@/assets/image/skill/react-router-Dark.svg";
import typescript from "@/assets/image/skill/typescript.svg";
import react from "@/assets/image/react.svg";
import nextjs from "@/assets/image/skill/next-js.svg";

const skills = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "react Router",
    icon: reactRouter,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
];

export default function Skill() {
  return (
    <section>
      <h2 className="text-center text-5xl font-semibold sm:text-[4rem]">
        My <span className="text-active">SKILLS</span>
      </h2>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-stretch justify-center gap-8 gap-y-10 px-4 pt-12">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex basis-[240px] items-center justify-between rounded-lg border border-white px-4 py-2"
          >
            <div className="flex items-center justify-around">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className="aspect-square"
              />
            </div>
            <div className="text-lg uppercase">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
