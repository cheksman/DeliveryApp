import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const PRIMARY_COLOR = '#0BCE83';
export const SECONDARY_COLOR = '#7203FF';
export const FADED_SECONDARY = '#E2CBFF';
export const TEXT_COLOR = '#9586A8';

export const addCardNumber = (cn?: string) => {
  if (!cn) {
    return 'No card';
  }
  let cn1 = '**** **** **** ';
  let cn2 = cn?.slice(10, cn.length);
  return cn1 + cn2;
};
