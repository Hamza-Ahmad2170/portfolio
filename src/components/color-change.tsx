"use client";

// import Gear from "./icon/gear";
import { FaGear } from "react-icons/fa6";

import type { AllowedColors } from "@/types/colors";
import { useEffect, useState } from "react";

const colors: AllowedColors[] = [
  "#FF6666",
  "#66FF99",
  "#FF99CC",
  "#6699FF",
  "#A0522D",
  "#FAD02E",
  "#c02942",
  "#CC66FF",
];

export default function ColorChange() {
  const [selectedColor, setSelectedColor] = useState<AllowedColors>("#FF6666");
  const [hoverColor, setHoverColor] = useState<AllowedColors | undefined>(
    undefined,
  );
  const currentColor = hoverColor || selectedColor;

  useEffect(() => {
    document.documentElement.style.setProperty("--color-active", currentColor);
  }, [currentColor]);

  return (
    <div className="group relative">
      <button type="button">
        <FaGear className="fill-active size-6 animate-spin" />
        <span className="sr-only">Change color</span>
      </button>
      <div className="absolute hidden min-h-12 min-w-20 grid-cols-4 items-center justify-center gap-2 pl-2 group-hover:grid">
        {colors.map((color) => (
          <button
            key={color}
            className="size-3 cursor-pointer rounded-full"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            onMouseEnter={() => setHoverColor(color)}
            onMouseLeave={() => setHoverColor(undefined)}
          >
            <span className="sr-only">{color}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
