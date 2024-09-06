"use client";
// shadcn
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
// others
import { useTheme } from "@/context/ThemeProvider";
import { themes } from "@/constants";
import Image from "next/image";
import { useRef } from "react";

const Theme = () => {
  const { mode, setMode } = useTheme();
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          ref={triggerRef}
          className="cursor-pointer hover:bg-light-700/40 focus:bg-light-700/40 data-[state=open]:bg-light-700/40 dark:hover:bg-dark-300 dark:focus:bg-dark-300 dark:data-[state=open]:bg-dark-300"
        >
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="light mode"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="dark mode"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12 min-w-32 rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => (
            <MenubarItem
              key={theme.value}
              onClick={() => {
                setMode(theme.value);

                if (theme.value !== "system") {
                  localStorage.theme = theme.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
            >
              {
                <Image
                  src={theme.icon}
                  alt={theme.value}
                  width={16}
                  height={16}
                  className={`${mode === theme.value && "active-theme"}`}
                />
              }
              <p
                className={`body-semibold text-light-500 ${mode === theme.value ? "text-primary-500" : "text-dark100_light900"}`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
export default Theme;

// ??fpa: focus state is not going even after doing blur();
