import { Limitless } from './00_Limitless';
import { ShareLessons } from './01_ShareLessons';
import { EnvironmentGoals } from './02_EnvironmentGoals';
import { FastPig } from './03_FastPig';
import { Passion } from './04_Passion';
import { SvgRow } from 'components/svgRow/SvgRow';

export const Row0 = () => {
  return (
    <SvgRow>
      <Limitless />
      <ShareLessons />
      <EnvironmentGoals />
      <FastPig />
      <Passion />
    </SvgRow>
  );
};
