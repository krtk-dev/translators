import React, {Component, useState, useRef} from 'react';
import {
  View,
  Dimensions,
  Text,
  StatusBar,
  Linking,
  ScrollView,
} from 'react-native';
import {BorderlessButton, BaseButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useNavigation from '../../hooks/useNavigation';

const WIDTH = Dimensions.get('window').width;
const RED = '#E44034';

const DATA = [
  {
    title: 'react',
    type: 'MIT License',
    description: 'Copyright (c) Facebook, Inc. and its affiliates.',
    link: 'https://github.com/facebook/react',
  },
  {
    title: 'react-native',
    type: 'MIT License',
    description: 'Copyright (c) Facebook, Inc. and its affiliates.',
    link: 'https://github.com/facebook/react-native',
  },
  {
    title: 'React-Native-FAB',
    type: 'MIT License',
    description: 'Copyright (c) 2017 SiDevesh',
    link: 'https://github.com/SiDevesh/React-Native-FAB',
  },
  {
    title: 'react-native-gesture-handler',
    type: 'MIT License',
    description: 'Copyright (c) 2016 Krzysztof Magiera',
    link: 'https://github.com/software-mansion/react-native-gesture-handler',
  },
  {
    title: 'react-native-material-menu',
    type: 'MIT License',
    description: 'Copyright (c) 2017 Maksim Miliyutin',
    link: 'https://github.com/mxck/react-native-material-menu',
  },
  {
    title: 'react-native-reanimated',
    type: 'MIT License',
    description: 'Copyright (c) 2016 Krzysztof Magiera',
    link: 'https://github.com/software-mansion/react-native-reanimated',
  },
  {
    title: 'react-native-screens',
    type: 'MIT License',
    description: 'Copyright (c) 2018 Krzysztof Magiera',
    link: 'https://github.com/kmagiera/react-native-screens',
  },
  {
    title: 'react-native-vector-icons',
    type: 'MIT License',
    description: 'Copyright (c) 2015 Joel Arvidsson',
    link: 'https://github.com/oblador/react-native-vector-icons',
  },
  {
    title: 'react-navigation',
    type: 'MIT License',
    description: 'Copyright (c) 2017 React Native Community',
    link: 'https://github.com/react-navigation/react-navigation',
  },
  {
    title: 'react-navigation-stack',
    type: 'MIT License',
    description: 'Copyright (c) 2017 React Native Community',
    link: 'https://github.com/react-navigation/stack',
  },
  {
    title: 'react-native-splash-screen',
    type: 'MIT License',
    description: 'Copyright (c) 2016 Jia PengHui',
    link: 'https://github.com/crazycodeboy/react-native-splash-screen',
  },
  {
    title: 'react-native-draggable-flatlist',
    type: 'MIT License',
    description: 'Copyright (c) 2019 computerjazz',
    link: 'https://github.com/computerjazz/react-native-draggable-flatlist',
  },
  {
    title: 'react-native-make',
    type: 'MIT License',
    description: 'Copyright (c) 2019 BAM',
    link: 'https://github.com/bamlab/react-native-make',
  },
];
const OssScreen = () => {
  const {goBack} = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: RED}}>
      <StatusBar backgroundColor={RED} barStyle="light-content" />
      <ScrollView style={{flex: 1, paddingTop: 20}}>
        <BaseButton
          onPress={() => goBack()}
          rippleColor="#bbb"
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: 50, alignItems: 'center'}}>
            <Icon name="keyboard-backspace" size={20} color="white" />
          </View>
          <Text style={{fontSize: 16, color: 'white'}}>뒤로</Text>
        </BaseButton>
        {DATA.map((data, index) => (
          <BaseButton
            key={index}
            onPress={() => Linking.openURL(data.link)}
            rippleColor="#bbb"
            style={{width: '100%', paddingHorizontal: 20, paddingVertical: 10}}>
            {/* <View style={{ width: 50, alignItems: 'center' }}>
                        <Icon name="cloud" size={20} color='white' />
                    </View> */}
            <Text style={{fontSize: 20, color: 'white'}}>{data.title}</Text>
            <Text style={{fontSize: 14, color: 'white'}}>
              {data.description}
            </Text>
            <Text style={{fontSize: 14, color: 'white'}}>{data.type}</Text>
          </BaseButton>
        ))}
        <View style={{height: 40}} />
      </ScrollView>
    </View>
  );
};

export default OssScreen;
