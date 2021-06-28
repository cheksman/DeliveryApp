import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {TEXT_COLOR} from '../helpers/constants';

const SearchBox: React.FC = () => {
  return (
    <Input
      placeholder="Search"
      leftIcon={{
        type: 'material-community',
        name: 'magnify',
        color: TEXT_COLOR,
      }}
      inputContainerStyle={styles.containerStyles}
    />
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    borderColor: '#D9D0E3',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
});

export default SearchBox;
