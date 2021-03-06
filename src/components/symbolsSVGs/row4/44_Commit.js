import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Commit = ({ size }) => {
  const description = 'Commit to what you love.';
  return (
    <MotionSvg name='Commit' size={size} description={description}>
      <motion.path
        d='M25 75C25 102.614 47.3858 125 75 125C102.614 125 125 102.614 125 75C125 47.3858 102.614 25 75 25C47.3858 25 25 47.3858 25 75Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M102 79V73C102 65.8203 96.1797 60 89 60C81.8203 60 76 65.8203 76 73V79C76 86.1797 81.8203 92 89 92C96.1797 92 102 86.1797 102 79Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M68 90C68 90 45 90 47.5 90C48.5 90 66 75.5001 66 67C66 58.5 54 58.5 48 62'
        strokeWidth='2'
      />
    </MotionSvg>
  );
};
