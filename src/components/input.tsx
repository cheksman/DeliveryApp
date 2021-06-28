import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  RegisterOptions,
  Path,
} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {KeyboardTypeOptions} from 'react-native';

type Props<TFieldValue extends FieldValues = FieldValues> = {
  name: Path<TFieldValue>;
  rules?: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  onFocus?: () => void;
  error?: FieldError;
  label?: string;
  on?: boolean;
  control: Control<TFieldValue>;
  rightIcon?: React.FC;
  keyboardType: KeyboardTypeOptions;
};
function InputComponent<TFieldValue>({
  name,
  control,
  rightIcon: RightIcon,
  rules,
  error,
  keyboardType,
}: Props<TFieldValue>) {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onBlur, onChange, value}}) => (
          <View style={styles.containerStyles}>
            <TextInput
              style={
                RightIcon
                  ? styles.inputContainerStyles
                  : styles.inputContainerStyles2
              }
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType={keyboardType}
            />
            {RightIcon && (
              <View style={styles.conainer}>
                <RightIcon />
              </View>
            )}
          </View>
        )}
      />
      <Text style={styles.errorText}>{error?.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainerStyles: {
    borderColor: '#D9D0E3',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginRight: -10,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '80%',
    color: '#333',
    marginBottom: 15,
  },
  inputContainerStyles2: {
    borderColor: '#D9D0E3',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 15,
    color: '#333',
  },
  containerStyles: {
    flexDirection: 'row',
  },
  conainer: {
    width: '22%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D9D0E3',
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 2,
    marginBottom: 15,
  },
  errorText: {
    fontSize: 10,
    color: '#ff0000',
    marginTop: -8,
  },
});

export default InputComponent;
