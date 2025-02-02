import robo from "@/assets/image/robo-wave-less.png";
import Image from "next/image";
import Intro from "./intro";
import Nav from "./nav";

export default function Home() {
  return (
    <section
      className="flex min-h-[calc(100dvh-200px)] items-center justify-between"
      id="home"
    >
      <div className="mx-auto w-full max-w-4xl px-4 lg:container">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
          <Image
            src={robo}
            alt="robot"
            priority
            loading="eager"
            className="h-auto w-auto place-self-center"
          />
          <Intro />
        </div>
      </div>
      <Nav />
    </section>
  );
}
