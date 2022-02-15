import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useRoute from '../../hooks/useRoute';

export interface FullScreenProps {
  color: string;
  content: string;
}

const FullScreen = () => {
  const {
    params: {color, content},
  } = useRoute<'Full'>();

  return (
    <View>
      <Text>FullScreen</Text>
    </View>
  );
};

export default FullScreen;

const styles = StyleSheet.create({});
