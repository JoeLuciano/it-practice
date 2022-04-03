import { motion } from 'framer-motion';
import { MotionSvg } from '../motionSvg/MotionSvg';

export const PersonalGrowth = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.line x1='103' y1='125' x2='103' y2='26' stroke-width='2' />
      <motion.line x1='76' y1='61' x2='76' y2='125' stroke-width='2' />
      <motion.line x1='50' y1='125' x2='50' y2='84' stroke-width='2' />
    </MotionSvg>
  );
};
