import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {COLORS, STATUSBAR_HEIGHT} from '../../constants/styles';
import oss from '../../assets/oss.json';
import OssScreenHeader from './OssScreenHeader';
import OssScreenOssCard from './OssScreenOssCard';

const DATA = Object.keys(oss).map(key => ({
  name: key,
  //@ts-ignore
  ...oss[key],
}));

const OssScreen = () => {
  return (
    <View style={styles.container}>
      <OssScreenHeader />
      <FlatList
        data={DATA}
        keyExtractor={item => item.name}
        renderItem={({item}) => <OssScreenOssCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.red,
    paddingTop: STATUSBAR_HEIGHT,
  },
});

export default OssScreen;
