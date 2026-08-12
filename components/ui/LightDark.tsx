"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import React from "react";

const LightDark = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex items-center justify-center p-2 rounded-full bg-neutral-900 border border-neutral-700 text-white dark:text-black absolute top-6 right-26 cursor-pointer dark:bg-neutral-300 dark:border-accent-700">
        <button
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </>
  );
};

export default LightDark;
