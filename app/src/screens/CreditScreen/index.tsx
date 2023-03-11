import React from 'react';
import {View, Text, Linking, ToastAndroid, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BaseButton from '../../components/BaseButton';
import {COLORS, STATUSBAR_HEIGHT} from '../../constants/styles';
import useNavigation from '../../hooks/useNavigation';
import DeviceInfo from 'react-native-device-info';
import InAppReview from 'react-native-in-app-review';

const CreditScreen = () => {
  const {goBack, navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <BaseButton
        onPress={() => Linking.openURL('mailto:koreanthinker@gmail.com')}
        style={[styles.itemContainer, {marginTop: 16}]}>
        <View style={styles.iconContainer}>
          <Icon name="email" size={20} color="white" />
        </View>
        <Text style={styles.text}>coderhyun476@gmail.com</Text>
      </BaseButton>
      <BaseButton
        onPress={() => Linking.openURL('https://www.github.com/koreanthinker')}
        style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon name="account-circle" size={20} color="white" />
        </View>
        <Text style={styles.text}>github.com/koreanthinker</Text>
      </BaseButton>
      <BaseButton onPress={() => navigate('Oss')} style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon name="cloud" size={18} color="white" />
        </View>
        <Text style={styles.text}>open source librarys</Text>
      </BaseButton>
      <BaseButton
        onPress={() => InAppReview.RequestInAppReview()}
        style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="white" />
        </View>
        <Text style={styles.text}>rate us</Text>
      </BaseButton>
      <BaseButton style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon name="info" size={20} color="white" />
        </View>
        <Text style={styles.text}>{DeviceInfo.getVersion()}</Text>
      </BaseButton>
      <BaseButton onPress={() => goBack()} style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon name="keyboard-backspace" size={20} color="white" />
        </View>
        <Text style={styles.text}>뒤로</Text>
      </BaseButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.red,
    paddingTop: STATUSBAR_HEIGHT,
    flex: 1,
  },
  itemContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
  },
});

export default CreditScreen;
