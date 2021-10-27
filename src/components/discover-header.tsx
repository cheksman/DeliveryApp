import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {SCREEN_HEIGHT} from '../helpers/constants';

type Props = {
  title?: string;
  active?: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const DiscoveryHeader: React.FC<Props> = ({title, active, setActive}) => {
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.col2}>
        <View style={styles.pillContainer}>
          <TouchableOpacity
            onPress={() => setActive('single')}
            style={
              active === 'single' ? styles.activePill : styles.inactivePill
            }>
            <Icon
              name="account"
              type="material-community"
              color={active === 'single' ? '#F5B6AA' : '#fff'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive('group')}
            style={
              active === 'group' ? styles.activePill : styles.inactivePill
            }>
            <Icon
              name="account-group-outline"
              type="material-community"
              color={active === 'group' ? '#F5B6AA' : '#fff'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
  },
  col2: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  container: {
    height: SCREEN_HEIGHT * 0.15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  col1: {
    width: '70%',
    marginBottom: 5,
  },
  pillContainer: {
    flexDirection: 'row',
    width: '100%',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 25,
  },
  activePill: {
    borderRadius: 25,
    backgroundColor: '#fff',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactivePill: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
});

export default DiscoveryHeader;
