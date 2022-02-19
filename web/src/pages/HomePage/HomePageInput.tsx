import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { BREAK_POINT } from '../../constants/styles';
import { TranslateContext } from '../../context/TranslateContext';

const Container = styled.div`
  flex: 1;
  align-items: center;
  padding: 32px 72px;
  @media (max-width: ${BREAK_POINT}) {
    flex: none;
    padding: 64px 16px;
  }
`;

const Input = styled.textarea`
  width: 100%;
  min-height: 50vh;
  border: none;
  resize: none;
  outline-color: transparent;
  @media (max-width: ${BREAK_POINT}) {
    flex: none;
    min-height: auto;
  }
`;

const HomePageInput = () => {
  const { text, onChangeText } = useContext(TranslateContext);

  return (
    <Container>
      <Input
        placeholder="최대 5,000글자까지 번역가능"
        value={text}
        onChange={e => onChangeText(e.target.value)}
      />
    </Container>
  );
};

export default HomePageInput;
