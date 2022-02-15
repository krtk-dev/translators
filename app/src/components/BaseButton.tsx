import {Pressable, PressableProps, StyleSheet} from 'react-native';
import React from 'react';

const BaseButton: React.FC<PressableProps> = props => <Pressable {...props} />;

export default BaseButton;

const styles = StyleSheet.create({});
