import React from 'react';
import {FlatList, ImageSourcePropType} from 'react-native';
import Slider from './slider';

export type ImageSliderData = {
  image: ImageSourcePropType;
  name: string;
};

type Props = {
  data?: ImageSliderData[];
};

const ImageSlider: React.FC<Props> = ({data}) => {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({item}) => (
        <Slider
          onBackPress={() => {}}
          onMorePress={() => {}}
          imageLink={item.image}
          dataLength={data ? data.length : 0}
        />
      )}
      keyExtractor={item => item.name}
      windowSize={1}
      initialNumToRender={1}
      maxToRenderPerBatch={1}
    />
  );
};

export default ImageSlider;
