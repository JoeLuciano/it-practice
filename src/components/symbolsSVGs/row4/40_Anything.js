import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Anything = ({ size }) => {
  const description =
    'You can do ANYTHING you set your mind to, without limitation.';
  return (
    <MotionSvg name='Anything' size={size} description={description}>
      <motion.path d='M9 120L53 31.5L97.5 120' strokeWidth='4' />
      <motion.path d='M30 119.5L74 31L118.5 119.5' strokeWidth='4' />
      <motion.path d='M52 119.5L96 31L140.5 119.5' strokeWidth='4' />
    </MotionSvg>
  );
};
