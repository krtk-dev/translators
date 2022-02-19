import styled from '@emotion/styled';
import React from 'react';
import HomePageHeader from './HomePageHeader';

const Container = styled.div`
  flex: 1;
`;

const HomePage = () => {
  return (
    <Container>
      <HomePageHeader />
    </Container>
  );
};

export default HomePage;
