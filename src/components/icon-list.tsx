import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {SECONDARY_COLOR} from '../helpers/constants';

type Props = {
  icon?: React.FC;
  list?: React.FC;
  on?: boolean;
  onPress?: () => void;
};

const IconList: React.FC<Props> = ({
  icon: IconComp,
  list: List,
  on,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.butCont}>
      <View style={styles.favCont}>{IconComp && <IconComp />}</View>
      <View style={on ? styles.cartCont2 : styles.cartCont1}>
        {List && <List />}
      </View>
      {on ? (
        <View style={styles.checkCont}>
          <Icon
            name="check"
            type="material-community"
            color={SECONDARY_COLOR}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  butCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  favCont: {
    width: '20%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cartCont1: {
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cartCont2: {
    width: '60%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  checkCont: {
    width: '20%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

export default IconList;
