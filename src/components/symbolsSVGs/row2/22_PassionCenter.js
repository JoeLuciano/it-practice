import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const PassionCenter = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M47.5 90.5C47.5 105.964 60.036 118.5 75.5 118.5C90.964 118.5 103.5 105.964 103.5 90.5C103.5 75.036 90.964 62.5 75.5 62.5C60.036 62.5 47.5 75.036 47.5 90.5Z'
        stroke-width='4'
        stroke-linecap='square'
      />
      <motion.path
        d='M61.5 91C61.5 98.4558 67.5442 104.5 75 104.5C82.4558 104.5 88.5 98.4558 88.5 91C88.5 83.5442 82.4558 77.5 75 77.5C67.5442 77.5 61.5 83.5442 61.5 91Z'
        stroke-width='4'
        stroke-linecap='square'
      />
      <motion.path d='M23 120.5L75.5 29L127.5 120.5H23Z' stroke-width='4' />
      <motion.line x1='75.5' y1='62.5' x2='75.5' y2='104.5' stroke-width='4' />
    </MotionSvg>
  );
};
