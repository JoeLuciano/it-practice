import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const FailureIsTemporary = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M126 26H24V124H126V26Z'
        stroke-width='2'
        stroke-linecap='square'
      />
      <motion.path d='M24 67.5L77 121.5L126 26' stroke-width='2' />
    </MotionSvg>
  );
};