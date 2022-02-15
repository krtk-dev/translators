import React, {Component, useState, useRef} from 'react';
import {View, Dimensions, Text, StatusBar} from 'react-native';
import {
  BaseButton,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DraggableFlatList from 'react-native-draggable-flatlist';

const RED = '#E44034';

const CardSequenceScreen = props => {
  const {navigation} = props;
  const [data, setData] = useState(
    navigation.getParam('sequenceData', ['오류']),
  );
  const setSequenceData = navigation.getParam('setSequenceData', () => {});

  const setSequence = ({data}) => {
    setData(data);
    setSequenceData(data);
  };

  const renderCard = ({item, index, drag, isActive}) => {
    return (
      <View
        style={{
          height: 50,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: isActive ? '#ffffff80' : 'none',
        }}>
        <Text style={{color: 'white', fontSize: 16, marginLeft: 20}}>
          {item}
        </Text>
        <TouchableWithoutFeedback
          onPressIn={drag}
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="drag-handle" size={20} color="white" />
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: RED}}>
      <StatusBar backgroundColor={RED} barStyle="light-content" />
      <DraggableFlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item, index) => `draggable-item-${index.toString()}`}
        onDragEnd={setSequence}
        ListHeaderComponent={
          <BaseButton
            onPress={() => navigation.goBack()}
            rippleColor="#bbb"
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16, color: 'white', marginLeft: 20}}>
              뒤로
            </Text>
            <View style={{width: 50, alignItems: 'center'}}>
              <Icon name="keyboard-backspace" size={20} color="white" />
            </View>
          </BaseButton>
        }
      />
    </View>
  );
};

export default CardSequenceScreen;
