export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroButtons {
  primary: string;
  secondary: string;
}

export interface HeroData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  description: string;
  badges: string[];
  stats: HeroStat[];
  buttons: HeroButtons;
}