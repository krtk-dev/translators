import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {COLORS, STATUSBAR_HEIGHT} from '../../constants/styles';
import CardSequenceScreenHeader from './CardSequenceScreenHeader';
import DraggableFlatList, {
  DragEndParams,
} from 'react-native-draggable-flatlist';
import {CardSequenceContext} from '../../context/CardSequenceContex';
import CardSequenceTranslatorCard from './CardSequenceScreenTranslatorCard';
import {Translator} from '../../constants/types';

const CardSequenceScreen = () => {
  const {cardSequence, updateCardSequence} = useContext(CardSequenceContext);

  const onDragEnd = useCallback(
    ({data}: DragEndParams<Translator>) => {
      updateCardSequence(data);
    },
    [updateCardSequence],
  );

  return (
    <View style={styles.container}>
      <CardSequenceScreenHeader />
      <DraggableFlatList
        data={cardSequence}
        renderItem={props => <CardSequenceTranslatorCard {...props} />}
        keyExtractor={item => item}
        onDragEnd={onDragEnd}
      />
    </View>
  );
};

export default CardSequenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.red,
    paddingTop: STATUSBAR_HEIGHT,
  },
});
