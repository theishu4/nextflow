import React, { useState, createContext, useContext, useEffect } from "react";

// declaring type
type ThemeContextTypes = {
  mode: string;
  // fpa? Can we specify the previous dispatch type.
  setMode: (mode: (prevMode: string) => string) => void;
};

const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    setMode((currMode) => {
      if (currMode === "dark") {
        document.documentElement.classList.add("light");
        return "light";
      } else {
        document.documentElement.classList.add("dark");
        return "dark";
      }
    });
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
