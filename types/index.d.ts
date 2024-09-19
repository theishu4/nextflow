import { BADGE_CRITERIA } from "@/constants";

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

export interface SidebarLink {
  imgURL: string;
  iconName:
    | "house"
    | "users-round"
    | "bookmark"
    | "briefcase-business"
    | "tag"
    | "circle-help";
  route: string;
  label: string;
  priority: "high" | "low";
}
export interface Job {
  id?: string;
  1;
  2;
  3;
  4;
  5;
  6;
  7;
  8;
  9;
  10;
  11;
  employer_name?: string;
  employer_logo?: string | undefined;
  employer_website?: string;
  job_employment_type?: string;
  job_title?: string;
  job_description?: string;
  job_apply_link?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
}
export interface Country {
  name: {
    common: string;
  };
}
export interface ParamsProps {
  params: { id: string };
}
export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}
export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}
export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;
