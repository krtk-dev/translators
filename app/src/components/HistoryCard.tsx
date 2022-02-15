import React, {Component, useState, useRef} from 'react';
import {View, Dimensions, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu, {MenuItem} from 'react-native-material-menu';

const WIDTH = Dimensions.get('window').width;

const TranslatedCard = () => {
  const {text, color, title, remove, register, removeOff} = props;

  return (
    <View
      style={{
        width: WIDTH - 20,
        margin: 10,
        backgroundColor: color,
        minHeight: 120,
        borderRadius: 4,
        ...shadow,
      }}
      animation="fadeInUp"
      duration={200}
      easing="ease-out">
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 24, marginLeft: 20}}>
          {title}
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
        {removeOff === undefined && (
          <BorderlessButton onPress={remove}>
            <Icon name="clear" size={20} color="white" style={{margin: 7}} />
          </BorderlessButton>
        )}
        <View
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BorderlessButton onPress={register}>
            <Icon
              name="arrow-forward"
              size={24}
              color="white"
              style={{margin: 5}}
            />
          </BorderlessButton>
        </View>
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

export default TranslatedCard;
