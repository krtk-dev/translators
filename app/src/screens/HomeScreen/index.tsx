import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreenHeader from './HomeScreenHeader';
import HomeScreenLanguageSelector from './HomeScreenLanguageSelector';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <HomeScreenLanguageSelector />
      <ScrollView />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
