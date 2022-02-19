import React from 'react';
import styled from '@emotion/styled';
import { BREAK_POINT, COLORS } from '../../constants/styles';
import Icon from '@mdi/react';
import { mdiApple, mdiGithub, mdiGooglePlay } from '@mdi/js';
import {
  APPSTORE_URL,
  GITHUB_URL,
  PLAYSTORE_URL,
} from '../../constants/values';

const Container = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${COLORS.red};
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
  @media (max-width: ${BREAK_POINT}) {
    padding: 0px 16px;
  }
`;

const Title = styled.a`
  font-weight: bold;
  color: ${COLORS.white};
  flex: 1;
`;

const HomePageHeader = () => {
  return (
    <Container>
      <Title href=".">3가지 번역기 비교하다</Title>
      <div style={{ flexDirection: 'row', alignItems: 'center' }}>
        <a href={PLAYSTORE_URL}>
          <Icon path={mdiGooglePlay} size="20px" color={COLORS.white} />
        </a>
        <a href={APPSTORE_URL}>
          <Icon
            style={{ marginLeft: 16 }}
            path={mdiApple}
            size="20px"
            color={COLORS.white}
          />
        </a>
        <a href={GITHUB_URL} target="_blank">
          <Icon
            style={{ marginLeft: 16 }}
            path={mdiGithub}
            size="20px"
            color={COLORS.white}
          />
        </a>
      </div>
    </Container>
  );
};

export default HomePageHeader;
