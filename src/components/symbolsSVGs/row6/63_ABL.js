import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const ABL = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M127 23H23V128H127V23Z'
        stroke-width='4'
        stroke-linecap='square'
      />
      <motion.line x1='114' y1='106' x2='85' y2='106' stroke-width='4' />
      <motion.line x1='75' y1='23' x2='75' y2='128' stroke-width='4' />
      <motion.line x1='114' y1='45' x2='85' y2='45' stroke-width='4' />
      <motion.line x1='114' y1='60' x2='85' y2='60' stroke-width='4' />
      <motion.line x1='114' y1='76' x2='85' y2='76' stroke-width='4' />
      <motion.line x1='114' y1='90' x2='85' y2='90' stroke-width='4' />
      <motion.line x1='62' y1='106' x2='33' y2='106' stroke-width='4' />
      <motion.line x1='62' y1='45' x2='33' y2='45' stroke-width='4' />
      <motion.line x1='62' y1='60' x2='33' y2='60' stroke-width='4' />
      <motion.line x1='62' y1='76' x2='33' y2='76' stroke-width='4' />
      <motion.line x1='62' y1='90' x2='33' y2='90' stroke-width='4' />
    </MotionSvg>
  );
};
