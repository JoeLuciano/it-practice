import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const GreatTeacher = ({ size }) => {
  const description = '';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M131 22H20V127H131V22Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M20 97.5L51 47.5L66 74L90.5 46.5L97.5 97.5L131 44.5'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </MotionSvg>
  );
};
