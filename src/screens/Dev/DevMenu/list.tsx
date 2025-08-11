import React, { useCallback } from 'react';
import { FlatList, View, Pressable } from 'react-native';
import type { FlatListProps } from 'react-native';

import useNavigation from 'hooks/use-navigation';

import { NAVIGATORS } from 'constants/screen-names';

import Typography from 'components/Typography';

import styles from '../styles';

import type { DevMenuItem } from './items';

const RouteDevItem = (item: DevMenuItem): JSX.Element => {
  const navigation = useNavigation();

  const navigateTosScreen = useCallback(() => {
    navigation.navigate(NAVIGATORS.DEV, { screen: item.name });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [item.name]);

  return (
    <Pressable onPress={navigateTosScreen} style={styles.itemContainer}>
      <Typography variant="heading3" style={styles.text}>
        {item.label}
      </Typography>
    </Pressable>
  );
};

const keyExtractor = (item: DevMenuItem): string => item.label;

const renderItem = ({ item }: { item: DevMenuItem }): JSX.Element => (
  <RouteDevItem {...item} />
);

interface Props
  extends Omit<Omit<FlatListProps<DevMenuItem>, 'data'>, 'renderItem'> {
  items: DevMenuItem[];
  handleBackPress?: () => void;
}

const List = ({ items, ...props }: Props): JSX.Element => (
  <View style={styles.container}>
    <FlatList
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      {...props}
    />
  </View>
);

export default List;
