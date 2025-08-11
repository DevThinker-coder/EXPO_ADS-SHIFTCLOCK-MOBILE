import type { ImageSourcePropType } from 'react-native';

export type RequestItemProps = {
  title: string;
  description: string;
  username: string;
  userprofile: ImageSourcePropType;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
  onPress: () => void;
} & (
  | { type: 'leave'; leaveType: 'casual' | 'sick'; duration: string }
  | {
      type: 'shift';
      shiftType: 'day' | 'night';
      shiftHours: number;
      breakHours: number;
    }
);

export type RequestItemComponent = (props: RequestItemProps) => JSX.Element;
