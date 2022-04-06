import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Sacred = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M123.5 21H27.5V117H123.5V21Z'
        stroke-width='2'
        stroke-linecap='square'
      />
      <motion.line x1='52.5' y1='129' x2='33.5' y2='129' stroke-width='2' />
      <motion.path d='M46.5 41L42.5 129' stroke-width='2' />
      <motion.path d='M75.5 42L75.5 60' stroke-width='2' />
      <motion.path
        d='M11 34C11 34 11 42.124 75.5 42C139 41.8779 139 34 139 34'
        stroke-width='2'
      />
      <motion.path d='M131.5 60L19.5 60' stroke-width='2' />
      <motion.path d='M107.5 41L110.5 129' stroke-width='2' />
      <motion.line x1='120.5' y1='129' x2='101.5' y2='129' stroke-width='2' />
    </MotionSvg>
  );
};
