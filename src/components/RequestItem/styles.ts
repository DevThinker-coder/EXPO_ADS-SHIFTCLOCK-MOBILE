import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  card: {
    ...Layouts.card,
    paddingBottom: Spacing.vertical.size12,
    marginBottom: Spacing.vertical.size12,
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  userProfile: {
    width: Dimensions.width.size8,
    height: Dimensions.width.size8,
  },
  userdetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 2,
  },
  username: {
    fontWeight: '500',
  },
  date: {
    color: '#D3D3D3',
  },
  headerRight: {
    width: Dimensions.width.size26,
    borderRadius: moderateScale(25),
    ...Layouts.centered,
  },
  body: {},
  title: {
    fontWeight: '600',
  },
  description: {
    lineHeight: moderateScale(20),
    fontSize: moderateScale(13),
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray,
    marginTop: Spacing.vertical.size4,
  },
  details: {
    flexDirection: 'row',
    gap: Spacing.horizontal.size28,
  },
  detailItem: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  detailItemText: {
    opacity: 0.6,
  },
});

export default styles;
