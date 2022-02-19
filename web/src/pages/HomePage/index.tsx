import styled from '@emotion/styled';
import React from 'react';
import { BREAK_POINT } from '../../constants/styles';
import { TRANSLATORS } from '../../constants/values';
import HomePageHeader from './HomePageHeader';
import HomePageInput from './HomePageInput';
import HomePageLanguageSelector from './HomePageLanguageSelector';
import HomePageTranslatedCard from './HomePageTranslatedCard';

const Container = styled.div`
  flex: 1;
`;

const ContentContainer = styled.div`
  width: 100%;
  flex-direction: row;
  @media (max-width: ${BREAK_POINT}) {
    flex-direction: column;
  }
`;

const TranslatedCardContainer = styled.div`
  flex: 1;
`;

const HomePage = () => {
  return (
    <Container>
      <HomePageHeader />
      <HomePageLanguageSelector />
      <ContentContainer>
        <HomePageInput />
        <TranslatedCardContainer>
          {TRANSLATORS.map(translator => (
            <HomePageTranslatedCard translator={translator} />
          ))}
        </TranslatedCardContainer>
      </ContentContainer>
    </Container>
  );
};

export default HomePage;
