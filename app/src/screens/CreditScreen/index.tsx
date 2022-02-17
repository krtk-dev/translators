import React, {Component, useState, useRef} from 'react';
import {
  View,
  Dimensions,
  Text,
  StatusBar,
  Linking,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import {BorderlessButton, BaseButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useNavigation from '../../hooks/useNavigation';

const WIDTH = Dimensions.get('window').width;
const RED = '#E44034';
const ANDROIDSTORE =
  'https://play.google.com/store/apps/details?id=com.koreanthinker.translators';
const VERSION = '1.8.2';

const CreditScreen = () => {
  const {goBack, navigate} = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: RED}}>
      <StatusBar backgroundColor={RED} barStyle="light-content" />
      <BaseButton
        onPress={() => Linking.openURL('mailto:coderhyun476@gmail.com')}
        rippleColor="#bbb"
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <View style={{width: 50, alignItems: 'center'}}>
          <Icon name="email" size={20} color="white" />
        </View>
        <Text style={{fontSize: 16, color: 'white'}}>
          coderhyun476@gmail.com
        </Text>
      </BaseButton>
      <BaseButton
        onPress={() => Linking.openURL('https://www.github.com/koreanthinker')}
        rippleColor="#bbb"
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{width: 50, alignItems: 'center'}}>
          <Icon name="account-circle" size={20} color="white" />
        </View>
        <Text style={{fontSize: 16, color: 'white'}}>
          github.com/koreanthinker
        </Text>
      </BaseButton>
      <BaseButton
        onPress={() => navigate('Apis')}
        rippleColor="#bbb"
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{width: 50, alignItems: 'center'}}>
          <Icon name="cloud" size={18} color="white" />
        </View>
        <Text style={{fontSize: 16, color: 'white'}}>open source apis</Text>
      </BaseButton>
      <BaseButton
        onPress={() => {
          Linking.openURL(ANDROIDSTORE);
          AsyncStorage.setItem('RATE', 'noMore');
        }}
        rippleColor="#bbb"
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{width: 50, alignItems: 'center'}}>
          <Icon name="star" size={20} color="white" />
        </View>
        <Text style={{fontSize: 16, color: 'white'}}>rate us</Text>
      </BaseButton>
      <BaseButton
        onPress={() => {
          ToastAndroid.show(VERSION, ToastAndroid.SHORT);
        }}
        rippleColor="#bbb"
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{width: 50, alignItems: 'center'}}>
          <Icon name="info" size={20} color="white" />
        </View>
        <Text style={{fontSize: 16, color: 'white'}}>{VERSION}</Text>
      </BaseButton>
      <BaseButton
        onPress={() => goBack()}
        rippleColor="#bbb"
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{width: 50, alignItems: 'center'}}>
          <Icon name="keyboard-backspace" size={20} color="white" />
        </View>
        <Text style={{fontSize: 16, color: 'white'}}>뒤로</Text>
      </BaseButton>
    </View>
  );
};

export default CreditScreen;
