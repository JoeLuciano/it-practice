import { motion } from 'framer-motion';
import { MotionSvg } from '../motionSvg/MotionSvg';

export const SafeCommunity = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M51 36L20 86V116H131V33L97.5 86L90.5 35L66 62.5L51 36Z'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </MotionSvg>
  );
};
