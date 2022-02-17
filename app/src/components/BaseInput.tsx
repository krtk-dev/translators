import {StyleSheet, Text, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/styles';

const BaseInput: React.FC<TextInputProps> = props => (
  <TextInput
    {...props}
    allowFontScaling={false}
    style={[styles.input, props.style]}
  />
);

export default BaseInput;

const styles = StyleSheet.create({
  input: {
    padding: 0,
    margin: 0,
    color: COLORS.black,
  },
});
