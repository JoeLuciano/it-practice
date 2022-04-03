import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Luck = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M25 75C25 102.614 47.3858 125 75 125C102.614 125 125 102.614 125 75C125 47.3858 102.614 25 75 25C47.3858 25 25 47.3858 25 75Z'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <motion.path d='M65 59H85.5L73.5 92' strokeWidth='2' />
    </MotionSvg>
  );
};
