import type { ViewStyle } from 'react-native';

export type TabItem = {
  id: number;
  title: string;
  name: string;
} & ({ dot: false; dotColor?: never } | { dot: true; dotColor?: string });

export type TabsProps = {
  onTabSelect: (tab: TabItem) => void;
  tabs: TabItem[];
  style?: ViewStyle;
};

export type TabsComponent = (props: TabsProps) => JSX.Element;
