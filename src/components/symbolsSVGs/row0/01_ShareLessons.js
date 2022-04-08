import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const ShareLessons = ({ size }) => {
  const description =
    'Share the lessons learned from your mistakes with your fellow Impactivists.';
  return (
    <MotionSvg size={size} description={description}>
      <motion.rect
        x='25'
        y='22'
        width='102'
        height='98'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M9 120L54.5 47.5L68.5 72L90 47L96.5 93L141.5 23.5'
        strokeWidth='2'
      />
    </MotionSvg>
  );
};
