import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Learn = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M23 75.5C23 103.943 46.0573 127 74.5 127C102.943 127 126 103.943 126 75.5C126 47.0573 102.943 24 74.5 24C46.0573 24 23 47.0573 23 75.5Z'
        stroke-width='4'
        stroke-linecap='square'
      />
    </MotionSvg>
  );
};
