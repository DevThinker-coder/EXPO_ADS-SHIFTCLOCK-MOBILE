import type { PickerSelectProps } from 'react-native-picker-select';

export type SelectProps = PickerSelectProps & { iconColor?: string };
export type SelectComponent = (props: SelectProps) => JSX.Element;
