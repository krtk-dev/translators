import {Pressable, StyleSheet, TextInput} from 'react-native';
import React, {useContext, useRef} from 'react';
import BaseInput from '../../components/BaseInput';
import {TranslateContext} from '../../context/TranslateContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BorderlessButton from '../../components/BorderlessButton';

const HomeScreenInput = () => {
  const inputRef = useRef<TextInput>(null);

  const {text, onChangeText, clear, applyClipboard} =
    useContext(TranslateContext);

  return (
    <Pressable
      onPress={() => inputRef.current?.focus()}
      style={styles.container}>
      <BaseInput
        ref={inputRef}
        placeholder="최대 5000글자까지 번역가능"
        multiline
        value={text}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <BorderlessButton
        onPress={text ? clear : applyClipboard}
        style={styles.claerBtn}>
        {text ? (
          <Icon name="close-circle-outline" color="#bbb" size={16} />
        ) : (
          <Icon name="clipboard-arrow-up-outline" color="#bbb" size={16} />
        )}
      </BorderlessButton>
    </Pressable>
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
