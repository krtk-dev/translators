import {Share, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useContext, useState} from 'react';
import {Translator} from '../../constants/types';
import {TranslateContext} from '../../context/TranslateContext';
import {COLORS, SHADOW} from '../../constants/styles';
import Typography from '../../components/Typography';
import RectButton from '../../components/RectButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-community/clipboard';
import {Menu, MenuItem} from 'react-native-material-menu';
import useNavigation from '../../hooks/useNavigation';
import Tts from 'react-native-tts';

interface HomeScreenTranslatedCardProps {
  translator: Translator;
}

const HomeScreenTranslatedCard: React.FC<HomeScreenTranslatedCardProps> = ({
  translator,
}) => {
  const {navigate} = useNavigation();
  const {translatedText, reverseTranslate} = useContext(TranslateContext);
  const [moreVisible, setMoreVisible] = useState(false);

  const text = translatedText[translator] || '';

  const onTTS = useCallback(async () => {
    await Tts.stop();
    Tts.speak(text);
  }, [text]);

  return (
    <View style={[styles.container, {backgroundColor: COLORS[translator]}]}>
      <Typography style={styles.title}>{translator.toUpperCase()}</Typography>
      <Typography style={styles.text}>{text}</Typography>
      <View style={styles.footer}>
        <RectButton onPress={onTTS} style={styles.icon}>
          <Icon color={COLORS.white} size={22} name="volume-up" />
        </RectButton>
        <RectButton
          onPress={() => Clipboard.setString(text)}
          style={styles.icon}
        >
          <Icon color={COLORS.white} size={20} name="content-copy" />
        </RectButton>
        <Menu
          visible={moreVisible}
          anchor={
            <RectButton
              onPress={() => setMoreVisible(true)}
              style={styles.icon}
            >
              <Icon color={COLORS.white} size={24} name="more-vert" />
            </RectButton>
          }
          onRequestClose={() => setMoreVisible(false)}
        >
          <MenuItem
            onPress={() => {
              setMoreVisible(false);
              setTimeout(() => {
                Share.share({message: text});
              }, 1000);
            }}
          >
            공유
          </MenuItem>
          <MenuItem
            onPress={() => {
              setMoreVisible(false);
              navigate('Full', {color: COLORS[translator], content: text});
            }}
          >
            전체화면
          </MenuItem>
          <MenuItem
            onPress={() => {
              setMoreVisible(false);
              reverseTranslate(text);
            }}
          >
            역번역
          </MenuItem>
        </Menu>
      </View>
    </View>
  );
};

export default HomeScreenTranslatedCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 160,
    borderRadius: 16,
    ...SHADOW,
    marginBottom: 16,
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
    marginLeft: -4,
  },
});
