import { StyleSheet } from 'react-native';

import { Colors, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.card,
    paddingHorizontal: Spacing.horizontal.size24,
    paddingVertical: Spacing.vertical.size16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  date: {
    color: Colors.primary,
    opacity: 0.5,
  },
  labels: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    paddingVertical: Spacing.vertical.size12,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  labelColor: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  labelText: {
    fontSize: moderateScale(13),
  },
  row: {
    flexDirection: 'row',
    marginBottom: Spacing.horizontal.size12,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bar: {
    // maxHeight: Dimensions.height.size8,
    width: 12,
    backgroundColor: Colors.red,
    marginHorizontal: Spacing.horizontal.size8,
    borderRadius: 4,
  },
  item: {
    gap: 8,
    opacity: 0.7,
  },
});

export default styles;
