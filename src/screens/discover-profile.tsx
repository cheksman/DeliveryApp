import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageSlider, {ImageSliderData} from '../components/image-slider';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {SCREEN_WIDTH} from '../helpers/constants';
import IconList from '../components/icon-list';
import Anthem from '../components/anthems';
import Cookies from '../assets/img/cookie.jpg';

type DeliveryProfileParamList = {
  DeliveryProfile: {
    peo: {
      title?: string;
      data?: ImageSliderData[];
      position?: string;
      friends?: string;
      description?: string;
    };
  };
};

const DiscoverProfile: React.FC = () => {
  const {params: profileDetails} =
    useRoute<RouteProp<DeliveryProfileParamList, 'DeliveryProfile'>>();
  const IconButtons = [
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
  ];
  console.log(profileDetails, 'i am her');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageSlider data={profileDetails?.peo?.data} />
      <View style={styles.textContent}>
        <Text style={styles.title}>{profileDetails?.peo?.title}</Text>
        <Text style={styles.subtitle}>{profileDetails?.peo?.position}</Text>
        <Text style={styles.subtitle}>{profileDetails?.peo?.friends}</Text>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.subtitle}>{profileDetails?.peo?.description}</Text>
      </View>
      <View style={styles.textContent}>
        <IconList
          icon={() => {
            return (
              <Icon
                name="format-quote-close"
                type="material-community"
                color="#3fb626"
                reverse
                size={8}
              />
            );
          }}
          list={() => {
            return <Text style={styles.subtitle}>My Anthem</Text>;
          }}
        />
        <Anthem
          imageLink={Cookies}
          title="Electric Feel"
          artist="Henry Oneil"
        />
      </View>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 30,
    color: '#2D0C57',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 16,
    color: '#9586A8',
    lineHeight: 26,
  },
  iconContainer2: {
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 13,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,
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
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 13,
      height: 10,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
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
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 40,
  },
  container: {
    width: SCREEN_WIDTH,
  },
  textContent: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#fff',
    marginBottom: 4,
    justifyContent: 'center',
  },
});

export default DiscoverProfile;
