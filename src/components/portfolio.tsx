import PortfolioItem from "./portfolio-item";

//images
import pizza from "@/assets/image/portfolio/react pizza.jpeg";
import react from "@/assets/image/react.svg";
import redux from "@/assets/image/redux.svg";
import tailwind from "@/assets/image/tailwind-css-2.svg";
import reactQuiz from "@/assets/image/portfolio/react quiz.jpeg";
import usePopcorn from "@/assets/image/portfolio/usepopcorn.jpeg";
import reactRouter from "@/assets/image/skill/react-router-Dark.svg";
import travelList from "@/assets/image/portfolio/travel list.jpeg";
import worldWise from "@/assets/image/portfolio/world wise.jpeg";
import reduxBank from "@/assets/image/portfolio/redux bank.jpeg";

const projects = [
  {
    name: "React Pizza",
    repo: "https://github.com/hamza-ahmad/react-pizza",
    url: "https://react-pizza.vercel.app/",
    image: pizza,
    techStack: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
      {
        name: "React Router",
        icon: reactRouter,
      },
    ],
  },
  {
    name: "React Quiz",
    repo: "https://github.com/Hamza-Ahmad2170/08react-quizV2",
    url: "https://hamza-ahmad2170.github.io/08react-quizV2/",
    image: reactQuiz,
    techStack: [
      {
        name: "React",
        icon: react,
      },
    ],
  },
  {
    name: "usePopcorn",
    repo: "https://github.com/Hamza-Ahmad2170/04usePopcorn",
    url: "https://hamza-ahmad2170.github.io/04usePopcorn/",
    image: usePopcorn,
    techStack: [
      {
        name: "React",
        icon: react,
      },
    ],
  },
  {
    name: "Travel List",
    repo: "https://hamza-ahmad2170.github.io/02Travel_List/",
    url: "https://hamza-ahmad2170.github.io/02Travel_List/",
    image: travelList,
    techStack: [
      {
        name: "React",
        icon: react,
      },
    ],
  },
  {
    name: "World Wise",
    repo: "https://github.com/Hamza-Ahmad2170/07worldwise",
    url: "https://hamza-ahmad2170.github.io/07worldwise/",
    image: worldWise,
    techStack: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "React Router",
        icon: reactRouter,
      },
    ],
  },
  {
    name: "Redux Bank",
    repo: "https://github.com/Hamza-Ahmad2170/Challenge_07_bank_account",
    url: "https://hamza-ahmad2170.github.io/Challenge_07_bank_account/",
    image: reduxBank,
    techStack: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="container mx-auto w-full px-4" id="portfolio">
      <h2 className="text-center text-4xl font-semibold sm:text-5xl sm:text-[4rem]">
        MY <span className="text-active">PORTFOLIO</span>
      </h2>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 pt-12 md:grid-cols-2">
        {projects.map((project) => (
          <PortfolioItem project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
