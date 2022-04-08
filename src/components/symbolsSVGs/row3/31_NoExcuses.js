import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const NoExcuses = ({ size }) => {
  const description = '';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M25 75.5C25 102.838 47.1619 125 74.5 125C101.838 125 124 102.838 124 75.5C124 48.1619 101.838 26 74.5 26C47.1619 26 25 48.1619 25 75.5Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.line
        x1='110.362'
        y1='42.4649'
        x2='39.3617'
        y2='108.465'
        strokeWidth='4'
      />
    </MotionSvg>
  );
};
