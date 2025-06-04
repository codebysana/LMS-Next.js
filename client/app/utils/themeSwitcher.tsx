/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

const themeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center justify-center mx-4">
      {theme === "dark" ? (
        <BiSun
          className="cursor-pointer theme-icon"
          size={25}
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiMoon
          className="cursor-pointer theme-icon"
          size={25}
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default themeSwitcher;
