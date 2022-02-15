import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  StatusBar,
  AsyncStorage,
  FlatList,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import OldTranslatedCard from '../component/OldTranslatedCard';
// import {initial2korean} from '../component/functions';
import useNavigation from '../../hooks/useNavigation';

const WIDTH = Dimensions.get('window').width;
const RED = '#E44034';

const HistoryScreen = () => {
  const {} = useNavigation();

  const removeOldData = async _index => {
    const d = oldData.filter((info, index) => index !== _index);
    setOldData(d);
    await AsyncStorage.setItem('OLD', JSON.stringify(d));
    const func = navigation.getParam('initializeOldData', function () {});
    func();
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={RED} barStyle="light-content" />
      <FlatList
        overScrollMode="never"
        ListHeaderComponent={
          <View
            style={{
              backgroundColor: RED,
              width: '100%',
              height: 52,
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            <View
              style={{
                width: 52,
                height: 52,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-back"
                  size={24}
                  color="white"
                  style={{margin: 5}}
                />
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{height: 52, justifyContent: 'center', marginLeft: 14}}>
              <Text style={{color: 'white', fontSize: 20}}>번역 기록</Text>
            </View>
          </View>
        }
        data={oldData}
        renderItem={({item, index}) => (
          <OldTranslatedCard
            text={item.text}
            title={initial2korean(item.target) + '로'}
            color={RED}
            remove={() => removeOldData(index)}
            register={() => {
              const func = navigation.getParam('setData', function () {});
              func(item.text, item.src, item.target);
              navigation.goBack();
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
