import { motion } from 'framer-motion';
import { MotionSvg } from '../motionSvg/MotionSvg';

export const MoveToGoals = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.rect
        x='26'
        y='32'
        width='98'
        height='98'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.line x1='75' y1='20' x2='75' y2='95' strokeWidth='4' />
      <motion.circle
        cx='75'
        cy='81'
        r='46'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <motion.circle
        cx='75'
        cy='81'
        r='13'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </MotionSvg>
  );
};
