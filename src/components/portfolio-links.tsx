import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa6";

type Props = {
  repo: string;
  url: string;
};

export default function PortfolioLinks({ repo, url }: Props) {
  return (
    <ul className="flex justify-center gap-4">
      <li>
        <Link
          href={repo}
          className="flex size-12 items-center justify-center rounded-full bg-black transition-colors duration-300 hover:bg-white hover:[&>svg]:fill-black"
        >
          <FaGithub className="size-6 fill-white transition-colors duration-300" />
        </Link>
      </li>
      <li>
        <Link
          href={url}
          className="flex size-12 items-center justify-center rounded-full bg-black transition-colors duration-300 hover:bg-white hover:[&>svg]:fill-black"
        >
          <FaEye className="size-6 fill-white transition-colors duration-300" />
        </Link>
      </li>
    </ul>
  );
}
