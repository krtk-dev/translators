import {Animated, Easing, Pressable, StyleSheet} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {TranslateContext} from '../../context/TranslateContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SHADOW} from '../../constants/styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useKeyboard} from '@react-native-community/hooks';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const HomeScreenTranslateFab = () => {
  const {bottom} = useSafeAreaInsets();
  const {translate, loading} = useContext(TranslateContext);
  const [scale] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(0));
  const {keyboardHeight, keyboardShown} = useKeyboard();
  console.log(keyboardHeight);
  useEffect(() => {
    // 번역시 Scale 애니메이션 작동
    Animated.timing(scale, {
      toValue: loading ? 0 : 1,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [loading]);

  useEffect(() => {
    // 키보드 작동시 TranslateY 애니메이션 작동
    Animated.spring(translateY, {
      toValue: keyboardShown ? -keyboardHeight + bottom : 0,
      useNativeDriver: true,
    }).start();
  }, [keyboardShown, keyboardHeight]);

  return (
    <AnimatedPressable
      onPress={translate}
      style={[
        styles.container,
        {bottom: bottom + 24},
        {transform: [{scale}, {translateY}]},
      ]}
    >
      <Icon name="translate" size={24} color={COLORS.white} />
    </AnimatedPressable>
  );
};

export default HomeScreenTranslateFab;

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    position: 'absolute',
    right: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 28,
    ...SHADOW,
  },
});
