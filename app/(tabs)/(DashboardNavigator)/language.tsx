import React, { useState } from 'react';

import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import Typography from 'components/Typography';

import TickIcon from 'assets/svgs/tick-blue.svg';
import { moderateScale } from 'utils/styles';
import { Colors, Dimensions, Layouts, Spacing } from 'styles/index';



const iconSize = moderateScale(15);

const languages = [
  {
    id: 1,
    name: 'Mandarin Chinese',
    code: 'ch',
  },
  {
    id: 2,
    name: 'Spanish',
    code: 'sp',
  },
  {
    id: 3,
    name: 'English',
    code: 'en',
  },
  {
    id: 4,
    name: 'Hindi',
    code: 'hn',
  },
  {
    id: 5,
    name: 'Arabic',
    code: 'ar',
  },
  {
    id: 6,
    name: 'Bengali',
    code: 'bn',
  },
  {
    id: 7,
    name: 'Portuguese',
    code: 'pg',
  },
  {
    id: 8,
    name: 'Russian',
    code: 'ru',
  },
  {
    id: 9,
    name: 'French',
    code: 'fr',
  },
  {
    id: 10,
    name: 'German',
    code: 'ge',
  },
  {
    id: 11,
    name: 'Japanese',
    code: 'jp',
  },
  {
    id: 12,
    name: 'Korean',
    code: 'kr',
  },
];

const Language = () => {
  const [selectedLanguage, setSelectLanguage] = useState('en');
  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        renderItem={({ item }) => {
          const isSelected = item.code === selectedLanguage;
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => setSelectLanguage(item.code)}
            >
              <Typography
                variant="heading3"
                style={[styles.name, !isSelected && styles.selectedName]}
              >
                {item.name}
              </Typography>
              {isSelected && (
                <View style={styles.tick}>
                  <TickIcon width={iconSize} height={iconSize} />
                </View>
              )}
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.code}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingBottom: Spacing.vertical.size28,
    paddingTop: Spacing.vertical.size20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: Spacing.vertical.size16,
  },
  name: {
    paddingBottom: Spacing.vertical.size4,
    paddingLeft: Spacing.horizontal.size4,
    color: Colors.primary,
  },
  selectedName: {
    color: Colors.black,
    fontWeight: '400',
  },
  tick: {
    width: Dimensions.width.size8,
    height: Dimensions.width.size8,
    backgroundColor: `${Colors.primary}`,
    ...Layouts.centered,
    borderRadius: moderateScale(8),
    tintColor: Colors.primary50,
  },
});

export default Language;
