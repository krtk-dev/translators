import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useRoute from '../../hooks/useRoute';
import {AutoSizeText, ResizeTextMode} from 'react-native-auto-size-text';
import {COLORS, HEIGHT, WIDTH} from '../../constants/styles';
import useNavigation from '../../hooks/useNavigation';

export interface FullScreenProps {
  color: string;
  content: string;
}

const FullScreen = () => {
  const {
    params: {color, content},
  } = useRoute<'Full'>();
  const {goBack} = useNavigation();

  return (
    <Pressable
      onPress={goBack}
      style={[styles.container, {backgroundColor: color}]}
    >
      <View style={styles.textContainer}>
        <AutoSizeText style={styles.text} mode={ResizeTextMode.group}>
          {content}
        </AutoSizeText>
      </View>
    </Pressable>
  );
};

export default FullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: HEIGHT - 160,
    height: WIDTH - 80,
    transform: [{rotate: '90deg'}],
  },
  text: {
    color: COLORS.white,
  },
});
