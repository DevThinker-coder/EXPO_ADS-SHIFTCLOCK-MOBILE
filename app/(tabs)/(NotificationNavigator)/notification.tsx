import { View, SectionList, StyleSheet } from 'react-native';
import Typography from 'components/Typography';
import { moderateScale } from 'utils/styles';
import { Colors, Dimensions, Layouts, Spacing } from 'styles/index';
import CircleTickIcon from 'assets/svgs/circle-tick.svg';
const sections = [
  {
    title: 'New',
    data: [
      {
        id: 1,
        title: 'Attendance Marked',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        icon: CircleTickIcon,
        new: true,
      },
      {
        id: 2,
        title: 'Reminders to mark attendance.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        new: true,
      },
    ],
  },
  {
    title: '29 - March - 2023',
    data: [
      {
        id: 3,
        title: 'Attendance Marked',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        icon: CircleTickIcon,
        new: false,
      },
      {
        id: 4,
        title: 'Reminders to mark attendance.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        new: false,
      },
    ],
  },
  {
    title: '25 - March - 2023',
    data: [
      {
        id: 5,
        title: 'Attendance Marked',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        icon: CircleTickIcon,
        new: false,
      },
      {
        id: 6,
        title: 'Reminders to mark attendance.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        new: false,
      },
    ],
  },
];

const Notification = () => (
  <View style={styles.container}>
    <SectionList
      sections={sections}
      renderItem={({ item }) => (
        <View style={[styles.item, item.new && styles.newItem]}>
          <View style={styles.titleContainer}>
            <Typography
              variant="body3"
              style={[styles.title, item.new && styles.newTitle]}
            >
              {item.title}
            </Typography>
            {item.icon && (
              <item.icon width={moderateScale(20)} height={moderateScale(20)} />
            )}
          </View>
          <Typography
            variant="caption1"
            style={[styles.body, item.new && styles.newBody]}
          >
            {item.body}
          </Typography>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Typography variant="caption1" style={styles.sectionHeaderText}>
            {title}
          </Typography>
        </View>
      )}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingTop: Spacing.vertical.size8,
    paddingBottom: Spacing.vertical.size28,
    alignItems: 'center',
    position: 'relative',
  },
  list: {
    overflow: 'visible',
  },
  listContent: {
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
    alignItems: 'center',
  },
  sectionHeader: {
    paddingVertical: Spacing.vertical.size12,
    paddingBottom: Spacing.vertical.size20,
    alignItems: 'center',
  },
  sectionHeaderText: {
    textTransform: 'uppercase',
    color: `${Colors.black}80`,
  },
  item: {
    ...Layouts.card,
    elevation: 8,
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
    alignItems: 'flex-start',
    gap: 3,
    paddingVertical: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.size20,
  },
  newItem: {
    backgroundColor: Colors.primary,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  newTitle: {
    color: Colors.white,
  },
  body: {
    color: `${Colors.black}55`,
    fontSize: moderateScale(13),
    width: '100%',
    lineHeight: moderateScale(16),
  },
  newBody: {
    color: `${Colors.white}55`,
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
    left: '55%',
    transform: [{ translateX: -Dimensions.width.size30 }],
    height: Dimensions.height.size5 + 1,
    width: Dimensions.width.size60,
    opacity: 1,
    shadowOpacity: 0.8,
    shadowColor: Colors.gray,
    shadowRadius: 30,
    shadowOffset: {
      width: -Dimensions.width.size30,
      height: -Dimensions.height.size7,
    },
    zIndex: 100,
    elevation: 20,
    backgroundColor: Colors.background,
  },
});

export default Notification;
