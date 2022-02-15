import React, {Component, useState, useRef} from 'react';
import {
  View,
  Dimensions,
  Text,
  ToastAndroid,
  Clipboard,
  Share,
} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu, {MenuItem} from 'react-native-material-menu';
import Tts from 'react-native-tts';

const WIDTH = Dimensions.get('window').width;

export default TranslatedCard = props => {
  const {text, color, apiName, reverse, navigation} = props;

  const menuRef = useRef(null);

  const copy = () => {
    Clipboard.setString(text);
    ToastAndroid.show('번역 복사됨', ToastAndroid.SHORT);
  };

  const share = async () => {
    menuRef.current.hide();
    try {
      await Share.share({message: text});
    } catch (error) {
      alert(error.message);
    }
  };
  const fullScreen = () => {
    menuRef.current.hide();
    navigation.navigate('Full', {color, text});
  };
  const reverseTranslate = () => {
    menuRef.current.hide();
    reverse(text);
  };
  const tts = () => {
    Tts.stop();
    Tts.setDefaultLanguage(kakaoLang2TTS(props.lang));
    Tts.speak(text);
  };

  return (
    <View
      style={{
        width: WIDTH - 20,
        margin: 10,
        backgroundColor: color,
        minHeight: 120,
        borderRadius: 4,
        ...shadow,
      }}>
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 24, marginLeft: 20}}>
          {apiName}
        </Text>
      </View>
      <View style={{width: '100%', minHeight: 50, paddingHorizontal: 20}}>
        <Text selectable style={{lineHeight: 30, fontSize: 20, color: 'white'}}>
          {text}
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <BorderlessButton onPress={tts} style={{marginRight: 11}}>
          <Icon name="volume-up" size={20} color="white" style={{margin: 7}} />
        </BorderlessButton>
        <BorderlessButton onPress={copy}>
          <Icon
            name="content-copy"
            size={20}
            color="white"
            style={{margin: 7}}
          />
        </BorderlessButton>
        <Menu
          ref={menuRef}
          button={
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <BorderlessButton onPress={() => menuRef.current.show()}>
                <Icon
                  name="more-vert"
                  size={24}
                  color="white"
                  style={{margin: 5}}
                />
              </BorderlessButton>
            </View>
          }>
          <MenuItem onPress={share}>공유</MenuItem>
          <MenuItem onPress={fullScreen}>전체화면</MenuItem>
          <MenuItem onPress={reverseTranslate}>역번역</MenuItem>
        </Menu>
      </View>
    </View>
  );
};

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};
