import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const FailureIsTemporary = ({ size }) => {
  const description = 'Failure is temporary. Move quickly beyond it.';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M126 26H24V124H126V26Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path d='M24 67.5L77 121.5L126 26' strokeWidth='2' />
    </MotionSvg>
  );
};
