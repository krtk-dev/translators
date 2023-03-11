import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, STATUSBAR_HEIGHT} from '../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BaseButton from '../../components/BaseButton';
import Typography from '../../components/Typography';
import useNavigation from '../../hooks/useNavigation';

const HomeDrawerScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon name="translate" color={COLORS.red} size={40} />
        </View>
      </View>
      <BaseButton
        onPress={() => navigate('CardSequence')}
        style={styles.tabContainer}>
        <Icon
          name="edit"
          color={COLORS.red}
          size={16}
          style={{marginRight: 16}}
        />
        <Typography>카드 순서변경</Typography>
      </BaseButton>
      <BaseButton
        onPress={() => navigate('History')}
        style={styles.tabContainer}>
        <Icon
          name="library-books"
          color={COLORS.red}
          size={16}
          style={{marginRight: 16}}
        />
        <Typography>번역기록</Typography>
      </BaseButton>
      <BaseButton
        onPress={() => navigate('Credit')}
        style={styles.tabContainer}>
        <Icon
          name="subtitles"
          color={COLORS.red}
          size={16}
          style={{marginRight: 16}}
        />
        <Typography>크레딧</Typography>
      </BaseButton>
    </View>
  );
};

export default HomeDrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    width: '100%',
    height: 120 + STATUSBAR_HEIGHT,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  iconContainer: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: COLORS.white,
  },
  tabContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
