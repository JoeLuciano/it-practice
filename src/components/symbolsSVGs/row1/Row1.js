import { SvgRow } from 'components/svgRow/SvgRow';
import { PersonalGrowth } from './10_PersonalGrowth';
import { FailureIsTemporary } from './11_FailureIsTemporary';
import { Linchpins } from './12_Linchpins';
import { Melon } from './13_Melon';
import { Luck } from './14_Luck';

export const Row1 = () => {
  return (
    <SvgRow>
      <PersonalGrowth />
      <FailureIsTemporary />
      <Linchpins />
      <Melon />
      <Luck />
    </SvgRow>
  );
};
