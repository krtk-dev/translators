import {Text, TextProps} from 'react-native';

import React from 'react';
import {COLORS} from '../constants/styles';

const Typography: React.FC<TextProps> = ({...props}) => (
  <Text
    {...props}
    allowFontScaling={false}
    style={[{color: COLORS.black}, props.style]}
  />
);

export default Typography;
