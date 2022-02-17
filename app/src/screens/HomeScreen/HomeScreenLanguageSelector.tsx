import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {COLORS, SHADOW} from '../../constants/styles';
import Typography from '../../components/Typography';
import {TranslateContext} from '../../context/TranslateContext';
import languageTo from '../../util/languageTo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RectButton from '../../components/RectButton';
import {Menu, MenuItem} from 'react-native-material-menu';
import {Language} from '../../constants/types';
import {LANGUAGES} from '../../constants/values';

const HomeScreenLanguageSelector = () => {
  const {
    toLanguage,
    fromLanguage,
    reverseLanguage,
    updateToLanguage,
    updateFromLanguage,
  } = useContext(TranslateContext);

  const [fromMenuVisible, setFromMenuVisible] = useState(false);
  const [toMenuVisible, setToMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setFromMenuVisible(true)}
        style={styles.languageButton}
      >
        <LanguageSelectMenu
          visible={fromMenuVisible}
          onRequestClose={() => setFromMenuVisible(false)}
          onSelect={updateFromLanguage}
        >
          <View style={styles.languageContainer}>
            <Typography>{languageTo.korean(fromLanguage)}</Typography>
            <Icon size={24} color={COLORS.red} name="arrow-drop-down" />
          </View>
        </LanguageSelectMenu>
      </Pressable>

      <RectButton onPress={reverseLanguage} style={styles.reverseButton}>
        <Icon size={24} color={COLORS.red} name="compare-arrows" />
      </RectButton>

      <Pressable
        onPress={() => setToMenuVisible(true)}
        style={styles.languageButton}
      >
        <LanguageSelectMenu
          visible={toMenuVisible}
          onRequestClose={() => setToMenuVisible(false)}
          onSelect={updateToLanguage}
        >
          <View style={styles.languageContainer}>
            <Typography>{languageTo.korean(toLanguage)}</Typography>
            <Icon size={24} color={COLORS.red} name="arrow-drop-down" />
          </View>
        </LanguageSelectMenu>
      </Pressable>
    </View>
  );
};

interface LanguageSelectMenu {
  visible: boolean;
  onRequestClose: () => void;
  onSelect: (language: Language) => void;
}

const LanguageSelectMenu: React.FC<LanguageSelectMenu> = ({
  visible,
  onRequestClose,
  onSelect,
  children,
}) => {
  return (
    <Menu visible={visible} anchor={children} onRequestClose={onRequestClose}>
      {LANGUAGES.map(language => (
        <MenuItem
          key={language}
          onPress={() => {
            onSelect(language);
            onRequestClose();
          }}
        >
          {languageTo.korean(language)}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default HomeScreenLanguageSelector;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    ...SHADOW,
    backgroundColor: COLORS.white,
  },
  languageButton: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  reverseButton: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
