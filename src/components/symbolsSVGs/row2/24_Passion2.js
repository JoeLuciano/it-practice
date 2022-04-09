import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Passion2 = ({ size }) => {
  const description =
    'Part two of early love. The process of creating passion.';
  return (
    <MotionSvg name='Passion2' size={size} description={description}>
      <motion.path
        d='M25 75C25 102.614 47.3858 125 75 125C102.614 125 125 102.614 125 75C125 47.3858 102.614 25 75 25C47.3858 25 25 47.3858 25 75Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path d='M52 64.5L61.5 60.5V91' strokeWidth='2' />
      <motion.path
        d='M98.5 78V72C98.5 64.8203 92.6797 59 85.5 59C78.3203 59 72.5 64.8203 72.5 72V78C72.5 85.1797 78.3203 91 85.5 91C92.6797 91 98.5 85.1797 98.5 78Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
    </MotionSvg>
  );
};
