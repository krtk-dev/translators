import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS, SHADOW, WIDTH} from '../../constants/styles';
import {History} from '../../constants/types';
import languageTo from '../../util/languageTo';
import useNavigation from '../../hooks/useNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TranslateContext} from '../../context/TranslateContext';
import {HistoryContext} from '../../context/HistoryContext';
import Typography from '../../components/Typography';
import RectButton from '../../components/RectButton';

const HistoryScreenHistoryCard: React.FC<History> = props => {
  const {navigate} = useNavigation();
  const {applyHistory} = useContext(TranslateContext);
  const {removeHistory} = useContext(HistoryContext);
  const {id, text, toLanguage} = props;

  return (
    <View style={styles.container}>
      <Typography style={styles.title}>
        {`${languageTo.korean(toLanguage)}로`}
      </Typography>
      <Typography style={styles.text}>{text}</Typography>
      <View style={styles.footer}>
        <RectButton onPress={() => removeHistory(id)} style={styles.icon}>
          <Icon color={COLORS.white} size={24} name="close" />
        </RectButton>
        <RectButton
          onPress={() => {
            applyHistory(props);
            navigate('Home');
          }}
          style={styles.icon}
        >
          <Icon color={COLORS.white} size={24} name="arrow-forward" />
        </RectButton>
      </View>
    </View>
  );
};

export default HistoryScreenHistoryCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 160,
    borderRadius: 16,
    marginBottom: 16,
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
    marginLeft: -4,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
