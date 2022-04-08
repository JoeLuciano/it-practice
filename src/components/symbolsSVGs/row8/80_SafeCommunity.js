import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const SafeCommunity = ({ size }) => {
  const description = '';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M51 36L20 86V116H131V33L97.5 86L90.5 35L66 62.5L51 36Z'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </MotionSvg>
  );
};
