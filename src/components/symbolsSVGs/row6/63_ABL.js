import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const ABL = ({ size }) => {
  const description = 'ABL - Always be Learning.';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M127 23H23V128H127V23Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.line x1='114' y1='106' x2='85' y2='106' strokeWidth='4' />
      <motion.line x1='75' y1='23' x2='75' y2='128' strokeWidth='4' />
      <motion.line x1='114' y1='45' x2='85' y2='45' strokeWidth='4' />
      <motion.line x1='114' y1='60' x2='85' y2='60' strokeWidth='4' />
      <motion.line x1='114' y1='76' x2='85' y2='76' strokeWidth='4' />
      <motion.line x1='114' y1='90' x2='85' y2='90' strokeWidth='4' />
      <motion.line x1='62' y1='106' x2='33' y2='106' strokeWidth='4' />
      <motion.line x1='62' y1='45' x2='33' y2='45' strokeWidth='4' />
      <motion.line x1='62' y1='60' x2='33' y2='60' strokeWidth='4' />
      <motion.line x1='62' y1='76' x2='33' y2='76' strokeWidth='4' />
      <motion.line x1='62' y1='90' x2='33' y2='90' strokeWidth='4' />
    </MotionSvg>
  );
};
