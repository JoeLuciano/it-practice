import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const PersonalGrowth = ({ size }) => {
  const description =
    'Personal growth is the highest priority of Impactivists.';
  return (
    <MotionSvg size={size} description={description}>
      <motion.line x1='103' y1='125' x2='103' y2='26' strokeWidth='2' />
      <motion.line x1='76' y1='61' x2='76' y2='125' strokeWidth='2' />
      <motion.line x1='50' y1='125' x2='50' y2='84' strokeWidth='2' />
    </MotionSvg>
  );
};
