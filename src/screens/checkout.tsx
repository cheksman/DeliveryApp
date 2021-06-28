import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from '../components/header';
import IconList from '../components/icon-list';
import SubCategory from '../components/sub-category';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SECONDARY_COLOR,
  TEXT_COLOR,
} from '../helpers/constants';

const Checkout: React.FC = () => {
  const options = [
    {
      label: "I'll pick it up myself",
      iconName: 'walk',
      iconType: 'material-community',
    },
    {
      label: 'By Courier',
      iconName: 'bike',
      iconType: 'material-community',
    },
    {
      label: 'By Drone',
      iconName: 'quadcopter',
      iconType: 'material-community',
    },
  ];

  const [selected, setSelected] = useState<string>('By Drone');
  const navigation = useNavigation();
  return (
    <View style={styles.scrollContainer}>
      <Header back bgColor="#fff" title="Checkout" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <SubCategory
          title="Payment method"
          onPress={() => navigation.navigate('Payment')}
        />
        <IconList
          icon={() => {
            return (
              <Icon
                name="credit-card-outline"
                type="material-community"
                color="#2D0C57"
              />
            );
          }}
          list={() => {
            return <Text style={styles.textStyles}>**** **** **** 4747</Text>;
          }}
        />
        <SubCategory title="Delivery address" />
        <IconList
          icon={() => {
            return (
              <Icon
                name="home-variant-outline"
                type="material-community"
                color="#2D0C57"
              />
            );
          }}
          list={() => {
            return (
              <View>
                <Text style={styles.textStyles}>Alexandra Smith</Text>
                <Text style={styles.textStyles}>
                  Cesu 31 k-2 5.st, SIA Chili
                </Text>
                <Text style={styles.textStyles}>Riga</Text>
                <Text style={styles.textStyles}>LV-1012</Text>
                <Text style={styles.textStyles}>Latvia</Text>
              </View>
            );
          }}
        />
        <SubCategory title="Delivery options" />
        {options.map(opt => (
          <IconList
            key={opt.label}
            icon={() => {
              return (
                <Icon
                  name={opt.iconName}
                  type={opt.iconType}
                  color={selected === opt.label ? SECONDARY_COLOR : '#2D0C57'}
                />
              );
            }}
            list={() => {
              return (
                <Text
                  style={
                    selected === opt.label
                      ? styles.selectedTextStyles
                      : styles.textStyles
                  }>
                  {opt.label}
                </Text>
              );
            }}
            on={selected === opt.label ? true : false}
            onPress={() => setSelected(opt.label)}
          />
        ))}
        <SubCategory title="Non-contact delivery" on />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#F6F5F5',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  textStyles: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: TEXT_COLOR,
  },
  selectedTextStyles: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: SECONDARY_COLOR,
    fontWeight: '700',
  },
});

export default Checkout;
