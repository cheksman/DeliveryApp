import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import Header from '../components/header';
import {SCREEN_HEIGHT, SCREEN_WIDTH, TEXT_COLOR} from '../helpers/constants';
import CardBg from '../assets/img/cardbg.png';
import Mastercard from '../assets/img/mastercard.png';
import CVC from '../assets/img/Hint.png';
import Button from '../components/button';
import {ICard} from '../store/actions/shop/shop.d';
import InputComponent from '../components/input';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {saveCard} from '../store/actions/shop/shop';
import {useNavigation} from '@react-navigation/native';

const Payment: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<ICard>({
    mode: 'all',
    defaultValues: {
      cardName: '',
      cardDate: '',
      cardCvc: '',
      cardNumber: '',
    },
  });
  const onSubmit = (vals: ICard) => {
    dispatch(saveCard(vals, () => navigation.navigate('Checkout')));
  };
  return (
    <ScrollView style={styles.container}>
      <Header back off />
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Credit/Debit Card</Text>
      </View>
      <ImageBackground
        source={CardBg}
        style={styles.cardbg}
        resizeMode="contain">
        <View style={styles.cardContainer}>
          <View style={styles.cardRows}>
            <Text style={styles.cardNumber}>{watch().cardNumber}</Text>
          </View>
          <View style={styles.cardName}>
            <View style={styles.cardNameCol1}>
              <Text style={styles.cardText}>
                {watch().cardName.toUpperCase()}
              </Text>
            </View>
            <View style={styles.cardNameCol2}>
              <Text style={styles.cardText}>{watch().cardDate}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.inputContainer}>
        <Text style={styles.textStyles}>Name on card</Text>
        <InputComponent<ICard>
          name="cardName"
          control={control}
          keyboardType="default"
          error={errors.cardName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textStyles}>Card number</Text>
        <InputComponent<ICard>
          name="cardNumber"
          control={control}
          keyboardType="number-pad"
          rules={{
            required: {value: true, message: 'Required'},
            minLength: {
              value: 12,
              message: 'Should not be less than 16 digits',
            },
            maxLength: {
              value: 15,
              message: 'Should not be more than 16 digits',
            },
          }}
          error={errors.cardNumber}
          rightIcon={() => <Image source={Mastercard} resizeMode="contain" />}
        />
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.col1}>
          <Text style={styles.textStyles}>Expiry date</Text>
          <InputComponent<ICard>
            name="cardDate"
            control={control}
            rules={{
              required: {value: true, message: 'Required'},
              pattern: {
                value: /([0-9]){2}\/([0-9]){2}/g,
                message: 'Should be in the pattern 01/12',
              },
            }}
            keyboardType="default"
            error={errors.cardDate}
          />
        </View>
        <View style={styles.col1}>
          <Text style={styles.textStyles}>CVC</Text>
          <InputComponent<ICard>
            name="cardCvc"
            control={control}
            keyboardType="number-pad"
            error={errors.cardCvc}
            rules={{
              required: {value: true, message: 'Required'},
              minLength: {
                value: 3,
                message: 'Should not be less than 3 digits',
              },
              maxLength: {
                value: 5,
                message: 'Should not be more than 5 digits',
              },
            }}
            rightIcon={() => (
              <Image source={CVC} style={styles.cvc} resizeMode="contain" />
            )}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          height={40}
          primary
          text="USE THIS CARD"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    fontFamily: 'Roboto',
    fontSize: 38,
    fontWeight: '700',
    color: '#2D0C57',
  },
  pageTitleContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  container: {
    backgroundColor: '#F6F5F5',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingBottom: 60,
  },
  cardbg: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.3,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 40,
  },
  inputContainer: {
    width: '100%',
  },
  textStyles: {
    fontSize: 12,
    color: TEXT_COLOR,
    paddingHorizontal: 20,
  },
  dateContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  col1: {
    width: '45%',
  },
  inputContainerStyles: {
    borderColor: '#D9D0E3',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  cardName: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '50%',
  },
  cardNameCol1: {
    width: '70%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cardNameCol2: {
    width: '30%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  cardText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '400',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '400',
  },
  cardRows: {
    height: '50%',
    justifyContent: 'flex-end',
  },
  cvc: {
    width: 20,
    height: 20,
  },
});

export default Payment;
