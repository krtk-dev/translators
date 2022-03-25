import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {COLORS, SHADOW} from '../../constants/styles';
import Typography from '../../components/Typography';
import {TranslateContext} from '../../context/TranslateContext';
import languageTo from '../../util/languageTo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BorderlessButton from '../../components/BorderlessButton';
import {Menu, MenuItem} from 'react-native-material-menu';
import {LANGUAGES_CODES} from '../../constants/values';
import {LanguageCode} from 'react-native-translator';

const HomeScreenLanguageSelector = () => {
  const {
    toLanguage,
    fromLanguage,
    reverseLanguage,
    updateToLanguage,
    updateFromLanguage,
    loading,
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

      {loading ? (
        <View style={styles.reverseButton}>
          <ActivityIndicator size="small" color={COLORS.red} />
        </View>
      ) : (
        <BorderlessButton
          onPress={reverseLanguage}
          style={styles.reverseButton}
        >
          <Icon size={24} color={COLORS.red} name="compare-arrows" />
        </BorderlessButton>
      )}

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
  onSelect: (language: LanguageCode<'google'>) => void;
}

const LanguageSelectMenu: React.FC<LanguageSelectMenu> = ({
  visible,
  onRequestClose,
  onSelect,
  children,
}) => {
  return (
    <Menu visible={visible} anchor={children} onRequestClose={onRequestClose}>
      {LANGUAGES_CODES.map(language => (
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
    height: 48,
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
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
