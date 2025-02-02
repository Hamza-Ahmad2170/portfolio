import React from "react";
import Clock from "./clock";
import ColorChange from "./color-change";

export default function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 z-50 col-span-4 px-4 pt-8 lg:px-14">
      <div className="flex items-center justify-between">
        <ColorChange />

        <Clock />
      </div>
    </header>
  );
}
