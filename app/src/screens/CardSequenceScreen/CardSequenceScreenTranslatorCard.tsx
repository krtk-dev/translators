import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/styles';
import Typography from '../../components/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BaseButton from '../../components/BaseButton';
import {TranslatorType} from '../../constants/types';
import {RenderItemParams} from 'react-native-draggable-flatlist';

const CardSequenceTranslatorCard: React.FC<
  RenderItemParams<TranslatorType>
> = props => {
  const {item, drag, isActive} = props;

  return (
    <BaseButton
      style={[
        styles.container,
        {backgroundColor: isActive ? '#ffffff88' : 'transparent'},
      ]}
    >
      <Typography style={styles.text}>{item.toUpperCase()}</Typography>
      <Pressable style={styles.iconContainer} onPressIn={drag}>
        <Icon name="drag-handle" size={20} color={COLORS.white} />
      </Pressable>
    </BaseButton>
  );
};

export default CardSequenceTranslatorCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
