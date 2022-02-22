import styled from '@emotion/styled';
import { mdiContentCopy, mdiSwapHorizontalVariant } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useContext } from 'react';
import { BREAK_POINT, COLORS } from '../../constants/styles';
import { Translator } from '../../constants/types';
import { TranslateContext } from '../../context/TranslateContext';

const Container = styled.div`
  box-shadow: 0px 4px 4px #cccccc;
  border-radius: 16px;
  min-height: 200px;
  max-width: 600px;
  width: 100%;
  margin-bottom: 16px;
  @media (max-width: ${BREAK_POINT}) {
    min-height: 160px;
    max-width: ${BREAK_POINT};
  }
`;

const Title = styled.div`
  color: ${COLORS.white};
  font-weight: bold;
  margin-top: 16px;
  margin-left: 16px;
  font-size: 18px;
`;

const Content = styled.div`
  flex: 1;
  color: ${COLORS.white};
  margin-top: 8px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Footer = styled.div`
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const IconButton = styled.div`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-left: -8px;
  &:hover {
    cursor: pointer;
  }
`;

interface HomePageTranslatedCardProps {
  translator: Translator;
}

const HomePageTranslatedCard: React.FC<HomePageTranslatedCardProps> = ({
  translator,
}) => {
  const { translatedData, reverseTranslate } = useContext(TranslateContext);

  const content = translatedData[translator];

  return (
    <Container
      className="translated-card"
      style={{ backgroundColor: COLORS[translator] }}
    >
      <Title>{translator.toUpperCase()}</Title>
      <Content>{content}</Content>
      <Footer>
        <IconButton onClick={() => reverseTranslate(content)}>
          <Icon
            size="24px"
            color={COLORS.white}
            path={mdiSwapHorizontalVariant}
          />
        </IconButton>
        <IconButton onClick={() => navigator.clipboard.writeText(content)}>
          <Icon size="20px" color={COLORS.white} path={mdiContentCopy} />
        </IconButton>
      </Footer>
    </Container>
  );
};

export default HomePageTranslatedCard;
