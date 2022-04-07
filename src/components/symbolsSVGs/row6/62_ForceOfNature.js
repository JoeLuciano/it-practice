import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const ForceOfNature = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M49.5 17L72.5 48.5L36.5 43L117.5 133L79 65.5L113.5 71L81 17'
        stroke-width='2'
      />
      <motion.path
        d='M129 17H20V122H129V17Z'
        stroke-width='2'
        stroke-linecap='square'
      />
    </MotionSvg>
  );
};
