import { SvgRow } from 'components/svgPage/svgRow/SvgRow';
import { SafeCommunity } from './80_SafeCommunity';
import { MoveToGoals } from './81_MoveToGoals';
import { YouAreInControl } from './82_YouAreInControl';
import { FragilityOfLife } from './83_FragilityOfLife';
import { Truth } from './84_Truth';

export const Row8 = () => {
  return (
    <SvgRow>
      <SafeCommunity />
      <MoveToGoals />
      <YouAreInControl />
      <FragilityOfLife />
      <Truth />
    </SvgRow>
  );
};
