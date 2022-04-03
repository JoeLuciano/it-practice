import { motion } from 'framer-motion';
import { MotionSvg } from '../motionSvg/MotionSvg';

export const GreatTeacher = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M131 22H20V127H131V22Z'
        stroke-width='2'
        stroke-linecap='square'
      />
      <motion.path
        d='M20 97.5L51 47.5L66 74L90.5 46.5L97.5 97.5L131 44.5'
        stroke-width='2'
        stroke-linecap='round'
      />
    </MotionSvg>
  );
};
