import {Linking, StyleSheet} from 'react-native';
import React from 'react';
import BaseButton from '../../components/BaseButton';
import Typography from '../../components/Typography';
import {COLORS} from '../../constants/styles';

interface OssScreenOssCardProps {
  name: string;
  licenses: string;
  repository: string;
}

const OssScreenOssCard: React.FC<OssScreenOssCardProps> = props => {
  const {licenses, name, repository} = props;

  return (
    <BaseButton
      onPress={() => Linking.openURL(repository)}
      style={styles.container}>
      <Typography style={styles.name}>{name}</Typography>
      <Typography style={styles.repository}>{repository}</Typography>
      <Typography style={styles.licenses}>{licenses}</Typography>
    </BaseButton>
  );
};

export default OssScreenOssCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  name: {
    color: COLORS.white,
    fontSize: 16,
  },
  repository: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 4,
  },
  licenses: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 2,
  },
});
