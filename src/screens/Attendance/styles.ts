import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size28,
    width: '100%',
    paddingTop: Spacing.vertical.size20,
    alignItems: 'center',
  },
  header: {
    ...Layouts.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.size20,
  },
  headerLeft: {
    width: Dimensions.width.size16,
    height: Dimensions.width.size16,
  },
  headerTitle: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: moderateScale(15),
  },
  headerMiddle: {
    marginLeft: Spacing.horizontal.size4,
  },
  headerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  headerLocationText: {
    opacity: 0.6,
  },
  headerRight: {
    width: Dimensions.width.size14,
    height: Dimensions.width.size14,
    borderRadius: Dimensions.width.size14 / 2,
    borderWidth: 3,
    borderColor: Colors.primary50,
    ...Layouts.centered,
    marginLeft: 'auto',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 20,
    paddingVertical: Spacing.vertical.size16,
  },
  content: {
    alignItems: 'center',
    paddingTop: Spacing.vertical.size8,
    gap: Spacing.vertical.size12,
    width: '100%',
  },
  attendanceHistory: {
    ...Layouts.card,
    width: '100%',
    position: 'relative',
    paddingTop: Spacing.vertical.size28,
    paddingHorizontal: Spacing.horizontal.size20,
    justifyContent: 'space-between',
  },
  attendanceHistoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.horizontal.size16,
    marginBottom: Spacing.vertical.size20,
    marginRight: Spacing.horizontal.size12,
  },
  time: {
    opacity: 0.4,
    fontSize: moderateScale(13),
    fontWeight: '500',
    width: Dimensions.width.size18,
  },
  attendanceAction: {
    color: Colors.primary,
    fontSize: moderateScale(13),
    fontWeight: '500',
  },
  line: {
    position: 'absolute',
    top: Spacing.vertical.size28,
    left:
      Dimensions.width.size18 +
      Spacing.horizontal.size16 +
      Spacing.horizontal.size20 -
      2,
    width: 4,
    height: '100%',
    backgroundColor: `#ACACAC`,
    zIndex: -2,
  },
  dot: {
    width: 15,
    height: 15,
    alignSelf: 'flex-start',
    transform: [
      {
        translateX: -15 / 2,
      },
    ],
    backgroundColor: Colors.primary,
    borderRadius: 7.5,
  },
  mapContainer: {
    width: '100%',
    height: Dimensions.height.size25,
    paddingVertical: Spacing.vertical.size4,
  },
  map: {
    width: '100%',
    height: Dimensions.height.size25,
    objectFit: 'contain',
  },
});

export default styles;
