"use client";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});
import Link from "next/link";

// import House from "./icon/house";
// import User from "./icon/user";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Home",
    href: "home",
    icon: <FaHouse className="size-5 fill-[#b2becd] group-hover:fill-white" />,
  },
  {
    name: "About",
    href: "about",
    icon: <FaUser className="size-5 fill-[#b2becd] group-hover:fill-white" />,
  },
  {
    name: "Portfolio",
    href: "portfolio",
    icon: (
      <FaBriefcase className="size-5 fill-[#b2becd] group-hover:fill-white" />
    ),
  },
  {
    name: "Contact",
    href: "contact",
    icon: (
      <FaEnvelopeOpen className="size-5 fill-[#b2becd] group-hover:fill-white" />
    ),
  },
];

export default function Nav() {
  const [activeHref, setActiveHref] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }, // Adjust this threshold for when sections should become active
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 translate-x-2 bg-[#2a2e35] md:top-3/6 md:right-4 md:bottom-auto md:left-auto md:-translate-y-1/2 md:bg-transparent 2xl:-translate-x-1/2">
      <ul className="flex justify-evenly gap-4 py-4 md:flex-col md:py-0">
        {navItems.map((item) => (
          <li key={item.name} className="group relative">
            <Link
              href={"#" + item.href}
              className={cn(
                "group inline-block rounded-full bg-[#454e56] p-4",
                {
                  "bg-active [&>svg]:fill-white": activeHref === item.href,
                },
              )}
            >
              {item.icon}
              <span className="sr-only">{item.name}</span>
            </Link>
            <p
              className={`absolute top-1/2 -left-[120%] hidden -translate-1/2 text-xs text-[#6c7983] md:group-hover:block ${pressStart2P.className}`}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
