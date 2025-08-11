import type { Colors } from 'styles';

export type StatsCardProps = {
  color: keyof typeof Colors;
  value: number;
  title: string;
};

export type StatsCardComponent = (props: StatsCardProps) => JSX.Element;
