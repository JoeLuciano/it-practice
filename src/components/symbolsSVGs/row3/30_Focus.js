import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Focus = ({ size }) => {
  const description = '';
  return (
    <MotionSvg name='Focus' size={size} description={description}>
      <motion.path
        d='M25 75C25 102.614 47.3858 125 75 125C102.614 125 125 102.614 125 75C125 47.3858 102.614 25 75 25C47.3858 25 25 47.3858 25 75Z'
        strokeWidth='4'
        strokeLinecap='square'
      />

      <motion.path
        d='M58 75C58 84.3888 65.6112 92 75 92C84.3888 92 92 84.3888 92 75C92 65.6112 84.3888 58 75 58C65.6112 58 58 65.6112 58 75Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.line x1='75' y1='118' x2='75' y2='133' strokeWidth='4' />
      <motion.line x1='75' y1='93' x2='75' y2='100' strokeWidth='4' />
      <motion.line x1='75' y1='50' x2='75' y2='58' strokeWidth='4' />
      <motion.line x1='75' y1='17' x2='75' y2='34' strokeWidth='4' />
      <motion.line x1='118' y1='75' x2='133' y2='75' strokeWidth='4' />
      <motion.line x1='17' y1='75' x2='32' y2='75' strokeWidth='4' />
    </MotionSvg>
  );
};
