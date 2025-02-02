"use client";

import useTypewriter from "@/hooks/useTypeWriter";

import { FaDownload } from "react-icons/fa6";

export default function Intro() {
  const { text } = useTypewriter({
    words: [
      "I'm a frontend developer",
      "I build aesthetic websites",
      "Explore more on my site 😉❤️",
    ],
    typeSpeed: 90,
    deleteSpeed: 60,

    initialDelay: 5000,
  });

  return (
    <div className="mx-auto w-max space-y-6 place-self-center">
      <h1 className="text-center text-[3.625rem] font-medium">
        Hi I&apos;m <br className="lg:hidden" />
        <span className="relative inline-block text-[2.4rem] lg:text-[3.625rem]">
          {/* <!-- Animated text with border --> */}
          <span
            className="animate-name before:animate-border intro-name absolute inset-0 overflow-hidden whitespace-nowrap before:absolute before:inset-0 before:border-r-4 before:border-white before:content-[attr(data-text)]"
            data-text="Hamza Ahmad"
          ></span>
          {/* <!-- Background text with lower opacity --> */}
          <span className="opacity-45">Hamza Ahmad</span>
        </span>
      </h1>
      <p className="min-h-[40px] text-center text-lg sm:text-2xl md:text-3xl">
        {text}
      </p>
      <div className="text-center">
        <a
          href="./Hamza Ahmad.pdf"
          download="Hamza Ahmad"
          className="border-active hover:bg-active inline-flex cursor-pointer items-center justify-between gap-4 overflow-hidden rounded-[30px] border-1 pl-2 text-lg font-semibold tracking-widest transition-colors duration-[.4s] ease-in-out"
        >
          <span className="py-2 pl-2">View Resume</span>

          <span className="bg-active inline-block rounded-full p-4 transition-colors duration-500">
            <FaDownload className="size-4" />
          </span>

          <span className="sr-only">Download Resume</span>
        </a>
      </div>
    </div>
  );
}
