import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, STATUSBAR_HEIGHT} from '../../constants/styles';
import Typography from '../../components/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BaseButton from '../../components/BaseButton';
import useNavigation from '../../hooks/useNavigation';

const CardSequenceScreenHeader = () => {
  const {goBack} = useNavigation();

  return (
    <BaseButton onPress={goBack} style={styles.container}>
      <Typography style={styles.text}>뒤로</Typography>
      <View style={styles.iconContainer}>
        <Icon name="keyboard-backspace" size={20} color={COLORS.white} />
      </View>
    </BaseButton>
  );
};

export default CardSequenceScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56 + STATUSBAR_HEIGHT,
    paddingTop: STATUSBAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
