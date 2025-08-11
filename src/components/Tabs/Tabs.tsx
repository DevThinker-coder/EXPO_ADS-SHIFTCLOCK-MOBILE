import { View, Animated, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

import Typography from 'components/Typography';

import type { TabsComponent } from './tabs.types';
import styles from './styles';

const Tabs: TabsComponent = (props) => {
  const { tabs, onTabSelect, style = {} } = props;
  const firstTab = tabs.length > 0 ? tabs[0].name : '';
  const [activeTab, setActiveTab] = useState(firstTab);
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={tabs}
        renderItem={({ item: tab }) => {
          const isSelected = tab.name === activeTab;
          return (
            <Animated.View
              key={tab.id}
              style={[styles.tabItem, isSelected && styles.tabItemActive]}
            >
              <TouchableOpacity
                style={styles.tabItemButton}
                onPress={() => {
                  setActiveTab(tab.name);
                  onTabSelect(tab);
                }}
              >
                {tab.dot && (
                  <View
                    style={[styles.dot, { backgroundColor: tab.dotColor }]}
                  />
                )}
                <Typography
                  variant="body3"
                  style={{ fontWeight: isSelected ? '600' : '400' }}
                >
                  {tab.title}
                </Typography>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
        overScrollMode="auto"
        keyExtractor={(tab) => tab.id.toString()}
        style={styles.tabContainer}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabs}
        horizontal
      />
    </View>
  );
};

export default Tabs;
