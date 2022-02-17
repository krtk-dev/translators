import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import HistoryScreenHeader from './HistoryScreenHeader';
import {HistoryContext} from '../../context/HistoryContext';
import {TranslateContext} from '../../context/TranslateContext';
import HistoryScreenHistoryCard from './HistoryScreenHistoryCard';

const HistoryScreen = () => {
  const {historys} = useContext(HistoryContext);

  return (
    <View style={{flex: 1}}>
      <HistoryScreenHeader />
      <FlatList
        contentContainerStyle={{paddingHorizontal: 16}}
        data={historys}
        ListHeaderComponent={<View style={{height: 24}} />}
        ListFooterComponent={<View style={{height: 100}} />}
        renderItem={({item}) => <HistoryScreenHistoryCard {...item} />}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
