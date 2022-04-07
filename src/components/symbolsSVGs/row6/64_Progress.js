import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Progress = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M124.196 117.5H25L74.5 32L124.196 117.5Z'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <motion.path d='M60.4592 56H88.5' strokeWidth='2' />
      <motion.path d='M51.5 72L98 72' strokeWidth='2' />
      <motion.path d='M43 87H107' strokeWidth='2' />
      <motion.path d='M34 102H115' strokeWidth='2' />
    </MotionSvg>
  );
};
