import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const BestYou = ({ size }) => {
  const description =
    'See beyond your current self to the opportunity of becoming the best version of yourself.';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M75.5 24L18 125H133L75.5 24Z'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <motion.path
        d='M75 65L51 107H99L75 65Z'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <motion.line
        x1='75'
        y1='65'
        x2='75'
        y2='105'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <motion.path
        d='M43 93C43 110.673 57.3269 125 75 125C92.6731 125 107 110.673 107 93C107 75.3269 92.6731 61 75 61C57.3269 61 43 75.3269 43 93Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
    </MotionSvg>
  );
};
