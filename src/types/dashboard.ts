export type StatIcon = "flag" | "football" | "globe" | "trophy";

export interface DashboardStat {
  title: string;
  value: string;
  icon: StatIcon;
}