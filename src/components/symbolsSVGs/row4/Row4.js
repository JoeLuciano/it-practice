import { SvgRow } from 'components/svgRow/SvgRow';
import { Anything } from './40_Anything';
import { OvercomeObstacles } from './41_OvercomeObstacles';
import { PhysicsOfProgress } from './42_PhysicsOfProgress';
import { Transformation } from './43_Transformation';
import { Commit } from './44_Commit';

export const Row4 = () => {
  return (
    <SvgRow>
      <Anything />
      <OvercomeObstacles />
      <PhysicsOfProgress />
      <Transformation />
      <Commit />
    </SvgRow>
  );
};
