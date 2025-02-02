import Header from "@/components/header";

import About from "@/components/about";
import Contact from "@/components/contact";
import Portfolio from "@/components/portfolio";
import Home from "@/components/Home";
import Skill from "@/components/skill";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="space-y-36 pb-28">
        <Home />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
