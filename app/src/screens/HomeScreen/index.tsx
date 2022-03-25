import {Keyboard, ScrollView, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import HomeScreenHeader from './HomeScreenHeader';
import HomeScreenLanguageSelector from './HomeScreenLanguageSelector';
import {TranslateContext} from '../../context/TranslateContext';
import {HistoryContext} from '../../context/HistoryContext';
import HomeScreenRecentCard from './HomeScreenRecentCard';
import {CardSequenceContext} from '../../context/CardSequenceContext';
import HomeScreenTranslatedCard from './HomeScreenTranslatedCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeScreenInput from './HomeScreenInput';

const HomeScreen = () => {
  const {scrollViewRef} = useContext(TranslateContext);
  const {historys} = useContext(HistoryContext);
  const {cardSequence} = useContext(CardSequenceContext);
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <HomeScreenLanguageSelector />
      <ScrollView
        ref={scrollViewRef}
        style={{paddingHorizontal: 16}}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        <HomeScreenInput />
        {cardSequence.map(translatorType => (
          <HomeScreenTranslatedCard
            key={translatorType}
            translatorType={translatorType}
          />
        ))}
        {!!historys.length && <HomeScreenRecentCard {...historys[0]} />}
        <View style={{height: bottom + 56 + 48}} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
