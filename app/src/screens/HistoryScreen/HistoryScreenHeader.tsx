import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SHADOW, STATUSBAR_HEIGHT} from '../../constants/styles';
import Typography from '../../components/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useNavigation from '../../hooks/useNavigation';
import BorderlessButton from '../../components/BorderlessButton';

const HistoryScreenHeader = () => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton style={styles.icon} onPress={goBack}>
        <Icon size={24} color={COLORS.white} name="arrow-back" />
      </BorderlessButton>
      <Typography style={styles.title}>번역 기록</Typography>
    </View>
  );
};

export default HistoryScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: STATUSBAR_HEIGHT + 56,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: COLORS.red,
    flexDirection: 'row',
    alignItems: 'center',
    ...SHADOW,
    zIndex: 99,
  },
  icon: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 8,
    fontSize: 18,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
