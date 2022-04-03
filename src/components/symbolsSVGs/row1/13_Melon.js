import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Melon = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path d='M74.5 64.5L74.5 79' strokeWidth='4' />
      <motion.path d='M59.5 62L50.5 71' strokeWidth='4' />
      <motion.path d='M98.5 70L89.5 62' strokeWidth='4' />
      <motion.path
        d='M33 47C33 47 33 92 74.5 92C116 92 116 47 116 47M21 47C21 47 21 103 74.5 103C128 103 128 47 128 47H21Z'
        strokeWidth='4'
      />
    </MotionSvg>
  );
};
