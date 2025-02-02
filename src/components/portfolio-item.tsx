import Image, { StaticImageData } from "next/image";
import PortfolioLinks from "./portfolio-links";

interface Props {
  project: {
    name: string;
    repo: string;
    url: string;
    image: StaticImageData;
    techStack: {
      name: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      icon: any;
    }[];
  };
}

export default function PortfolioItem({ project }: Props) {
  const { name, repo, url, image, techStack } = project;
  return (
    <div className="project relative overflow-hidden rounded-md">
      <Image
        src={image}
        alt="react pizza"
        className="min-h-[200px] sm:aspect-auto"
      />
      <div className="bg-active/80 portfolio absolute w-full">
        <div className="flex h-full flex-col items-center lg:h-3/5 lg:justify-between">
          <p className="pt-2 pb-4 text-2xl font-semibold lg:pb-16">{name}</p>
          <div className="space-y-4">
            <PortfolioLinks url={url} repo={repo} />
            <div className="flex items-center justify-center gap-8 pt-2">
              {techStack.map((techStack) => (
                <Image
                  src={techStack.icon}
                  alt={techStack.name}
                  className="size-10"
                  key={techStack.name}
                  title={techStack.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
