import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const SharedPurpose = ({ size }) => {
  const description = '';
  return (
    <MotionSvg name='SharedPurpose' size={size} description={description}>
      <motion.path
        d='M25 75C25 102.614 47.3858 125 75 125C102.614 125 125 102.614 125 75C125 47.3858 102.614 25 75 25C47.3858 25 25 47.3858 25 75Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M78 91.9999C88 90.4999 93.75 84 96 73.5M96 73.5C97.5 66.5 96 58.8903 85.5 59C79.9499 59.0579 74.5 62.4496 74.5 67.9999C74.5 73.9999 79.6944 78 85.5 78C89.5 78 92 77 96 73.5Z'
        strokeWidth='2'
      />
      <motion.path d='M55 62L64.5 58V88.5' strokeWidth='2' />
    </MotionSvg>
  );
};
