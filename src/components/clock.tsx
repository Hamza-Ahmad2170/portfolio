"use client";

import { useEffect, useState } from "react";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

function date() {
  return new Date()
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // or false for 24-hour format
    })
    .toLowerCase();
}

export default function Clock() {
  const [time, setTime] = useState(date);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`text-xl leading-normal ${pressStart2P.className} `}>
      {time}
    </span>
  );
}
