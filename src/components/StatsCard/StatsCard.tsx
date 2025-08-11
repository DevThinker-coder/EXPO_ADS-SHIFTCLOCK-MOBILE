/* eslint-disable react/no-array-index-key */
import { View } from 'react-native';
import React from 'react';

import { Colors, Dimensions } from 'styles';
import { withAnchorPoint } from 'utils/withAnchorPoint';
import Typography from 'components/Typography';

import { moderateScale } from 'utils/styles';

import type { StatsCardComponent } from './stats-card.types';
import styles from './styles';

const StatsCard: StatsCardComponent = (props) => {
  const { value, color, title } = props;
  const percentage = value / 100;
  const circle = Math.round(360 * percentage);
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {Array(360 - circle)
          .fill(0)
          .map((_, index) => {
            const getTransform = () => {
              const transform = {
                transform: [{ rotate: `-${index}deg` }],
              };
              return withAnchorPoint(
                transform,
                { x: 1, y: 1 },
                {
                  width: Dimensions.width.size25 * 0.01,
                  height: Dimensions.width.size25 / 2,
                },
              );
            };

            return (
              <View
                key={360 - index}
                style={[
                  styles.circleInner,
                  getTransform(),
                  { borderTopColor: Colors[color], opacity: 0.2 },
                ]}
              />
            );
          })}

        {Array(circle + 1)
          .fill(0)
          .map((_, index) => {
            const getTransform = () => {
              const transform = {
                transform: [{ rotate: `${index}deg` }],
              };
              return withAnchorPoint(
                transform,
                { x: 1, y: 1 },
                {
                  width: Dimensions.width.size25 * 0.01,
                  height: Dimensions.width.size25 / 2,
                },
              );
            };

            return (
              <View
                key={index}
                style={[
                  styles.circleInner,
                  getTransform(),
                  { borderTopColor: Colors[color], opacity: 1 },
                ]}
              />
            );
          })}
        <View style={styles.wrapper}>
          <Typography
            variant="body3"
            style={{
              fontWeight: 'bold',
              color: Colors[color],
              fontSize: moderateScale(18),
            }}
          >{`${percentage * 100}%`}</Typography>
        </View>
      </View>
      <Typography variant="caption1">{title}</Typography>
    </View>
  );
};

export default StatsCard;
