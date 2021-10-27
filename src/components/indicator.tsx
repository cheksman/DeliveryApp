import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  dataLength: number;
};

const Indicator: React.FC<Props> = ({dataLength}) => {
  let viewNumbers = [];
  for (let i = 0; i < dataLength; i++) {
    viewNumbers.push(i);
  }

  return (
    <View style={styles.container}>
      {viewNumbers.map(num => (
        <View key={num} style={styles.line} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 4,
    marginHorizontal: 4,
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    elevation: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: 40,
    paddingHorizontal: 20,
  },
});

export default Indicator;
