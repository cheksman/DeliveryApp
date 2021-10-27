import React, {useState} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/card';
import BgImage from '../assets/img/bg2.jpg';
import Coffee from '../assets/img/coffee.jpg';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {TEXT_COLOR} from '../helpers/constants';
import DiscoveryHeader from '../components/discover-header';
import {useNavigation} from '@react-navigation/native';
import Cookies from '../assets/img/cookie.jpg';
import Mango from '../assets/img/mango.jpg';

type Props = {
  imageLink: ImageSourcePropType;
};

const DiscoverScreen: React.FC = () => {
  const [active, setActive] = useState('single');
  const navigation = useNavigation();
  const IconButtons = [
    {
      iconName: 'refresh',
      iconType: 'material-community',
      iconColor: '#f3a93a',
      iconSize: 25,
      iconContainerStyle: styles.iconContainer,
      onPress: () => {},
    },
    {
      iconName: 'close',
      iconType: 'material-community',
      iconColor: '#ec73b7',
      iconSize: 30,
      iconContainerStyle: styles.iconContainer2,
      onPress: () => {},
    },
    {
      iconName: 'star',
      iconType: 'material-community',
      iconColor: '#4083da',
      iconSize: 25,
      iconContainerStyle: styles.iconContainer3,
      onPress: () => {},
    },
    {
      iconName: 'heart',
      iconType: 'material-community',
      iconColor: '#32c28e',
      iconSize: 30,
      iconContainerStyle: styles.iconContainer2,
      onPress: () => {},
    },
    {
      iconName: 'lightning-bolt',
      iconType: 'material-community',
      iconColor: '#b95eca',
      iconSize: 25,
      iconContainerStyle: styles.iconContainer,
      onPress: () => {},
    },
  ];

  const People = [
    {
      title: 'Kyle, 26',
      data: [
        {
          image: Coffee,
          name: 'coffee',
        },
        {
          image: Cookies,
          name: 'cookie',
        },
        {
          image: Mango,
          name: 'mango',
        },
      ],
      position: 'Office Manager @Airbnb',
      friends: '3 mutual friends',
      description:
        'When placing an order, select the option contactless delivery and the courier will your order at the door.',
    },
    {
      title: 'Susan, 40',
      data: [
        {
          image: Coffee,
          name: 'coffee',
        },
        {
          image: Cookies,
          name: 'cookie',
        },
        {
          image: Mango,
          name: 'mango',
        },
      ],
      position: 'Office Manager @Airbnb',
      friends: '3 mutual friends',
      description:
        'When placing an order, select the option contactless delivery and the courier will your order at the door.',
    },
  ];
  return (
    <View>
      <ImageBackground
        style={styles.imgBg}
        imageStyle={styles.img}
        source={BgImage}
        resizeMode="cover">
        <DiscoveryHeader
          title="Discover"
          active={active}
          setActive={setActive}
        />
        {People.map(peo => (
          <Card
            onPress={() =>
              navigation.navigate('DiscoverProfile', {
                peo,
              })
            }
            imageLink={peo.data[0].image}
            title={peo.title}
            key={peo.title}
            subtitle1={peo.position}
            subtitle2={peo.friends}
            icon={() => (
              <TouchableOpacity onPress={() => {}}>
                <Icon
                  name="information-outline"
                  type="material-community"
                  color={TEXT_COLOR}
                />
              </TouchableOpacity>
            )}
          />
        ))}

        <View style={styles.iconFlex}>
          {IconButtons.map(button => (
            <TouchableOpacity
              style={button.iconContainerStyle}
              key={button.iconName}
              onPress={button.onPress}>
              <Icon
                name={button.iconName}
                type={button.iconType}
                color={button.iconColor}
                size={button.iconSize}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexGrow: 1,
    alignItems: 'center',
  },
  img: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iconContainer: {
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 40,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 2,
  },
  iconContainer2: {
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 2,
  },
  iconContainer3: {
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 40,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginHorizontal: 2,
  },
  iconFlex: {
    justifyContent: 'space-between',
    width: '85%',
    flexDirection: 'row',
    marginTop: 40,
  },
});

export default DiscoverScreen;
