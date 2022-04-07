import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const StimulusResponseGap = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M139 67H10V89H139V67Z'
        stroke-width='3'
        stroke-linecap='square'
      />
      <motion.path
        d='M27 78C27 103.957 48.0426 125 74 125C99.9574 125 121 103.957 121 78C121 52.0426 99.9574 31 74 31C48.0426 31 27 52.0426 27 78Z'
        stroke-width='3'
        stroke-linecap='square'
      />
      <motion.path
        d='M46 78C46 93.464 58.536 106 74 106C89.464 106 102 93.464 102 78C102 62.536 89.464 50 74 50C58.536 50 46 62.536 46 78Z'
        stroke-width='3'
        stroke-linecap='square'
      />
    </MotionSvg>
  );
};
