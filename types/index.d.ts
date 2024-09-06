export type Mode = "dark" | "light" | "system";

export type Theme = {
  value: Mode;
  label: string;
  icon: string;
};

export type ThemeContextTypes = {
  mode: Mode;
  // ??fpa Can we specify the previous dispatch type.
  setMode: (mode: Mode | ((prevMode: Mode) => Mode)) => void;
};
