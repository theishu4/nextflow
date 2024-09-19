"use client";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";

import {
  BookmarkIcon,
  BriefcaseBusinessIcon,
  CircleHelpIcon,
  CircleUserRoundIcon,
  HouseIcon,
  TagIcon,
  UsersRoundIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// lucide-icons
const icons = {
  house: HouseIcon,
  "users-round": UsersRoundIcon,
  bookmark: BookmarkIcon,
  "briefcase-business": BriefcaseBusinessIcon,
  tag: TagIcon,
  "circle-help": CircleHelpIcon,
};

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="custom-scrollbar background-light900_dark200 sticky bottom-0 z-40 order-1 flex flex-col justify-between gap-8 overflow-auto px-4 py-1 sm:top-16 sm:order-none sm:h-[calc(100vh-4rem)] sm:w-max sm:!bg-transparent sm:px-0 sm:py-6">
      <nav className="sm:pr-4">
        <ul className="flex items-center justify-between sm:flex-col sm:items-start sm:justify-normal sm:gap-4">
          {sidebarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            const Icon = icons[item.iconName];
            return (
              <li
                key={item.route}
                className={`${isActive ? "primary-gradient" : "hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-dark-400 dark:active:bg-dark-300"} ${item.priority === "low" && "hidden sm:block"} rounded-full sm:w-full sm:rounded-none sm:rounded-r-full`}
              >
                <Link
                  href={item.route}
                  className="block items-center p-2.5 sm:p-3 sm:pl-7 md:flex md:gap-4 md:pr-5"
                >
                  <Icon />
                  <span className="hidden md:block">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mx-auto hidden sm:block md:mx-0 md:px-4">
        <SignedOut>
          <Link
            href="/sign-in"
            className="block items-center rounded-full border border-primary-500 p-2.5 text-primary-500 transition-colors duration-200 hover:bg-primary-500/15 sm:p-3 md:flex md:gap-4"
          >
            <CircleUserRoundIcon />
            <span className="hidden md:block">Sign In</span>
          </Link>
        </SignedOut>
      </div>
    </aside>
  );
};
export default LeftSidebar;
