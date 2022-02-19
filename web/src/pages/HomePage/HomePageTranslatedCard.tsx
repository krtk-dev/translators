import React from 'react';
import { Translator } from '../../constants/types';

interface HomePageTranslatedCardProps {
  translator: Translator;
}

const HomePageTranslatedCard: React.FC<HomePageTranslatedCardProps> = ({
  translator,
}) => {
  return <div>HomePageTranslatedCard</div>;
};

export default HomePageTranslatedCard;
