import { SidebarLink, Theme } from "@/types";

export const themes: Theme[] = [
  {
    value: "light",
    label: "Light",
    icon: "/assets/icons/sun.svg",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "/assets/icons/moon.svg",
  },
  {
    value: "system",
    label: "System",
    icon: "/assets/icons/computer.svg",
  },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    iconName: "house",
    route: "/",
    label: "Home",
    priority: "high",
  },
  {
    imgURL: "/assets/icons/users.svg",
    iconName: "users-round",
    route: "/community",
    label: "Community",
    priority: "high",
  },
  {
    imgURL: "/assets/icons/star.svg",
    iconName: "bookmark",
    route: "/collection",
    label: "Collections",
    priority: "high",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    iconName: "briefcase-business",
    route: "/jobs",
    label: "Find Jobs",
    priority: "high",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    iconName: "tag",
    route: "/tags",
    label: "Tags",
    priority: "low",
  },
  // {
  //   imgURL: "/assets/icons/user.svg",
  //   iconName: "circle-user-round",
  //   route: "/profile",
  //   label: "Profile",
  //   priority: "high",
  // },
  {
    imgURL: "/assets/icons/question.svg",
    iconName: "circle-help",
    route: "/ask-question",
    label: "Ask a question",
    priority: "low",
  },
];
export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
