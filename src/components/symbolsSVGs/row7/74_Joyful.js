import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Joyful = ({ size }) => {
  const description = 'Build a joyful life.';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M25 75C25 102.614 47.3858 125 75 125C102.614 125 125 102.614 125 75C125 47.3858 102.614 25 75 25C47.3858 25 25 47.3858 25 75Z'
        strokeWidth='3'
        strokeLinecap='square'
      />
      <motion.path
        d='M42.5 73C42.5 73 42.5 104.5 75 104.5C107.5 104.5 107.5 73 107.5 73'
        strokeWidth='3'
      />
      <motion.line x1='55' y1='55' x2='55' y2='71' strokeWidth='3' />
      <motion.line x1='95' y1='55' x2='95' y2='71' strokeWidth='3' />
    </MotionSvg>
  );
};
