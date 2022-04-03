import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const OvercomeObstacles = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path d='M31 119.5L75 31L119.5 119.5' stroke-width='4' />
    </MotionSvg>
  );
};
