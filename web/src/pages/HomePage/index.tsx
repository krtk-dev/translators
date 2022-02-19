import styled from '@emotion/styled';
import React from 'react';
import HomePageHeader from './HomePageHeader';
import HomePageLanguageSelector from './HomePageLanguageSelector';

const Container = styled.div`
  flex: 1;
`;

const HomePage = () => {
  return (
    <Container>
      <HomePageHeader />
      <HomePageLanguageSelector />
    </Container>
  );
};

export default HomePage;
