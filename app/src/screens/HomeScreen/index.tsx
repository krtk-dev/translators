import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreenHeader from './HomeScreenHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <HomeScreenHeader />
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
