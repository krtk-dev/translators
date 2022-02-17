import {Keyboard, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import HomeScreenHeader from './HomeScreenHeader';
import HomeScreenLanguageSelector from './HomeScreenLanguageSelector';
import {TranslateContext} from '../../context/TranslateContext';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import Typography from '../../components/Typography';
import {HistoryContext} from '../../context/HistoryContext';
import HistoryCard from '../../components/HistoryCard';
import HomeScreenRecentCard from './HomeScreenRecentCard';
import {CardSequenceContext} from '../../context/CardSequenceContex';
import HomeScreenTranslatedCard from './HomeScreenTranslatedCard';

const HomeScreen = () => {
  const {text, onChangeText, translate, scrollViewRef} =
    useContext(TranslateContext);
  const {historys} = useContext(HistoryContext);
  const {cardSequence} = useContext(CardSequenceContext);

  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <HomeScreenLanguageSelector />
      <ScrollView
        ref={scrollViewRef}
        style={{paddingHorizontal: 16}}
        onTouchStart={Keyboard.dismiss}>
        <BaseInput
          placeholder="최대 1000글자까지 번역가능"
          multiline
          value={text}
          onChangeText={onChangeText}
          style={styles.input}
        />
        {cardSequence.map(translator => (
          <HomeScreenTranslatedCard key={translator} translator={translator} />
        ))}
        {!!historys.length && <HomeScreenRecentCard {...historys[0]} />}
        <BaseButton onPress={translate}>
          <Typography>번역</Typography>
        </BaseButton>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '100%',
    marginVertical: 56,
  },
});
