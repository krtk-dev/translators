import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useNavigation from '../../hooks/useNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, STATUSBAR_HEIGHT} from '../../constants/styles';
import Typography from '../../components/Typography';
import BorderlessButton from '../../components/BorderlessButton';

const HomeScreenHeader = () => {
  const {openDrawer}: any = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={() => openDrawer()} style={styles.menuBtn}>
        <Icon name="menu" color={COLORS.white} size={24} />
      </BorderlessButton>
      <Typography style={styles.title}>3가지 번역기 비교하다</Typography>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56 + STATUSBAR_HEIGHT,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: COLORS.red,
    zIndex: 99,
  },
  menuBtn: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: 16,
  },
});
