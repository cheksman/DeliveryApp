import React from 'react';
import {ActivityIndicator} from 'react-native';
import {SECONDARY_COLOR} from '../helpers/constants';

type Props = {
  size?: number;
  color?: string;
};

const Loader: React.FC<Props> = ({size = 40, color = SECONDARY_COLOR}) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loader;
