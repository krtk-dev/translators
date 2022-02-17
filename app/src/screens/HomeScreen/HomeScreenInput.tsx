import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import BaseInput from '../../components/BaseInput';
import {TranslateContext} from '../../context/TranslateContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BorderlessButton from '../../components/BorderlessButton';

const HomeScreenInput = () => {
  const {text, onChangeText, clear} = useContext(TranslateContext);

  return (
    <View style={styles.container}>
      <BaseInput
        placeholder="최대 1000글자까지 번역가능"
        multiline
        value={text}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <BorderlessButton onPress={clear} style={styles.claerBtn}>
        {!!text && <Icon name="highlight-off" color="#bbb" size={16} />}
      </BorderlessButton>
    </View>
  );
};

export default HomeScreenInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginVertical: 56,
    flex: 1,
  },
  claerBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
});
