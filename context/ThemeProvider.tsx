"use client";
import { ThemeContextTypes, Mode } from "@/types";
import React, { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const rootClassList = document.documentElement.classList;
    if (
      storedTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      rootClassList.remove("light");
      rootClassList.add("dark");
    } else {
      rootClassList.remove("dark");
      rootClassList.add("light");
    }
  }, [mode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if ("theme" in localStorage) {
      storedTheme === "dark" ? setMode("dark") : setMode("light");
    } else setMode("system");
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("Context is used out of ThemeContext scope.");
  return context;
}
