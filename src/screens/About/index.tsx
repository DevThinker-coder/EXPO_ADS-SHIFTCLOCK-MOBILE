/* eslint-disable react/no-array-index-key */
import { ScrollView, View } from 'react-native';
import React from 'react';

import Typography from 'components/Typography';

import type { AboutScreen } from './about.types';
import styles from './styles';

const aboutUsData = [
  {
    id: 1,
    heading: 'Lorem ipsum dolor sit amet',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  },
  {
    id: 2,
    heading: 'Lorem ipsum dolor sit amet',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  },
];

const About: AboutScreen = () => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {aboutUsData.map((item) => (
        <View key={item.id} style={styles.section}>
          <Typography variant="heading3" style={styles.heading}>
            {item.heading}
          </Typography>
          {item.paragraphs.map((paragraph, index) => (
            <Typography key={index} variant="caption1" style={styles.paragraph}>
              {paragraph}
            </Typography>
          ))}
        </View>
      ))}
    </ScrollView>
    <Typography variant="caption1">Version v1.5.0</Typography>
  </View>
);

export default About;
