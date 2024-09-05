"use client";

import React from "react";
import ThemeProvider from "./ThemeProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
