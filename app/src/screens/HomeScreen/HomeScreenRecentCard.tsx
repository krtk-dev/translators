import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS, SHADOW, WIDTH} from '../../constants/styles';
import {History} from '../../constants/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TranslateContext} from '../../context/TranslateContext';
import Typography from '../../components/Typography';
import {RectButton} from 'react-native-gesture-handler';

const HomeScreenRecentCard: React.FC<History> = props => {
  const {applyHistory} = useContext(TranslateContext);
  const {text} = props;

  return (
    <View style={styles.container}>
      <Typography style={styles.title}>최근검색</Typography>
      <Typography style={styles.text}>{text}</Typography>
      <View style={styles.footer}>
        <RectButton onPress={() => applyHistory(props)} style={styles.icon}>
          <Icon color={COLORS.white} size={24} name="arrow-forward" />
        </RectButton>
      </View>
    </View>
  );
};

export default HomeScreenRecentCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 160,
    borderRadius: 4,
    ...SHADOW,
    backgroundColor: COLORS.red,
  },
  title: {
    marginLeft: 16,
    marginTop: 16,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: COLORS.white,
    margin: 16,
    marginBottom: 8,
  },
  footer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
