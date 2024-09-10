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
import { MoonStar, SunMedium } from "lucide-react";

const Theme = () => {
  const { mode, setMode } = useTheme();
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Menubar className="relative border-none bg-transparent p-0 shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          ref={triggerRef}
          className="flex-center size-[2.6rem] cursor-pointer rounded-full p-0 hover:bg-gray-200 focus:bg-gray-200 data-[state=open]:bg-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:data-[state=open]:bg-gray-800"
        >
          {mode === "light" ? (
            <SunMedium size={24} stroke="#FF7000" strokeWidth={2.5} />
          ) : (
            <MoonStar size={24} stroke="#fff" />
          )}
          <span className="sr-only">Change Theme</span>
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
