import React, { useContext } from 'react';
import { LANGUAGES } from '../../constants/values';
import { TranslateContext } from '../../context/TranslateContext';
import languageTo from '../../util/languageTo';
import styled from '@emotion/styled';
import { BREAK_POINT, COLORS } from '../../constants/styles';
import { mdiCompareHorizontal, mdiMenuDown } from '@mdi/js';
import Icon from '@mdi/react';
import { Language } from '../../constants/types';

const Container = styled.div`
  width: 100%;
  height: 48px;
  flex-direction: row;
  background-color: ${COLORS.white};
  box-shadow: 0px 4px 4px #cccccc;
`;

const Devider = styled.div`
  flex: 1;
  @media (max-width: ${BREAK_POINT}) {
    flex: 0;
  }
`;

const SelectorContainer = styled.div`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const LanguageContainer = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const LanguageSelect = styled.select`
  appearance: none;
  background: ${mdiMenuDown};
  font-size: 14px;
  border: none;
  outline-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const ReverseButton = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const HomePageLanguageSelector = () => {
  const {
    fromLanguage,
    toLanguage,
    updateFromLanguage,
    updateToLanguage,
    reverseLanguage,
  } = useContext(TranslateContext);

  return (
    <Container>
      <SelectorContainer>
        <LanguageContainer>
          <LanguageSelect
            onChange={e => updateFromLanguage(e.target.value as Language)}
            value={fromLanguage}
          >
            {LANGUAGES.map(lang => (
              <option value={lang}>{languageTo.korean(lang)}</option>
            ))}
          </LanguageSelect>
          <Icon path={mdiMenuDown} size="24px" color={COLORS.red} />
        </LanguageContainer>
        <ReverseButton onClick={reverseLanguage}>
          <Icon path={mdiCompareHorizontal} size="24px" color={COLORS.red} />
        </ReverseButton>
        <LanguageContainer>
          <LanguageSelect
            onChange={e => updateToLanguage(e.target.value as Language)}
            value={toLanguage}
          >
            {LANGUAGES.map(lang => (
              <option value={lang}>{languageTo.korean(lang)}</option>
            ))}
          </LanguageSelect>
          <Icon path={mdiMenuDown} size="24px" color={COLORS.red} />
        </LanguageContainer>
      </SelectorContainer>
      <Devider />
    </Container>
  );
};

export default HomePageLanguageSelector;
