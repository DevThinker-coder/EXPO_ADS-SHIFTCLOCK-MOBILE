import type { TabItem } from 'components/Tabs';
import { Colors } from 'styles';

export default [
  {
    id: 1,
    title: 'All',
    name: 'all',
    dot: false,
  },
  {
    id: 2,
    title: 'Pending',
    name: 'pending',
    dot: true,
    dotColor: Colors.yellow,
  },
  {
    id: 3,
    title: 'Approved',
    name: 'approved',
    dot: true,
    dotColor: Colors.green,
  },
  {
    id: 4,
    title: 'Rejected',
    name: 'rejected',
    dot: true,
    dotColor: Colors.red,
  },
] satisfies TabItem[];
