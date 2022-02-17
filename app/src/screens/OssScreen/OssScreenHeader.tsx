import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BaseButton from '../../components/BaseButton';
import useNavigation from '../../hooks/useNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../constants/styles';

const OssScreenHeader = () => {
  const {goBack} = useNavigation();

  return (
    <BaseButton onPress={() => goBack()} style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="keyboard-backspace" size={20} color={COLORS.white} />
      </View>
      <Text style={styles.text}>뒤로</Text>
    </BaseButton>
  );
};

export default OssScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
  },
});
