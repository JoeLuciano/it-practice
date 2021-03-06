import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const OvercomeObstacles = ({ size }) => {
  const description = 'Any obstacle can be overcome.';
  return (
    <MotionSvg name='OvercomeObstacles' size={size} description={description}>
      <motion.path d='M31 119.5L75 31L119.5 119.5' strokeWidth='4' />
    </MotionSvg>
  );
};
