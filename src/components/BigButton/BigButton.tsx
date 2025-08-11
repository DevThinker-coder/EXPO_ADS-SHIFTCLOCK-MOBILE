import { TouchableOpacity } from 'react-native';
import React from 'react';

import Typography from 'components/Typography';

import styles from './styles';
import type { BigButtonComponent } from './big-button.types';

const BigButton: BigButtonComponent = ({ style, icon, title }) => (
  <TouchableOpacity style={[styles.container, style]}>
    {icon}
    <Typography variant="body2" style={styles.text}>
      {title.toUpperCase()}
    </Typography>
  </TouchableOpacity>
);

export default BigButton;
