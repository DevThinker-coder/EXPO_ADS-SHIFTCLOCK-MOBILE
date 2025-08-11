import React, { useState } from 'react';

import { FlatList, TouchableOpacity, View } from 'react-native';

import Typography from 'components/Typography';

import TickIcon from 'assets/svgs/tick-blue.svg';
import { moderateScale } from 'utils/styles';

import styles from './styles';
import type { LanguageScreen } from './language.types';

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

const Language: LanguageScreen = () => {
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
export default Language;
