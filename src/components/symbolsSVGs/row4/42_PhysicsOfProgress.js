import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const PhysicsOfProgress = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M129 21H21V129H129V21Z'
        stroke-width='4'
        stroke-linecap='square'
      />
      <motion.path
        d='M91 59H59V91H91V59Z'
        stroke-width='4'
        stroke-linecap='square'
      />
      <motion.path
        d='M125.458 61.1362L61.1362 24L24 88.3218L88.3218 125.458L125.458 61.1362Z'
        stroke-width='4'
        stroke-linecap='square'
      />
      <motion.path
        d='M109.004 83.9975L84.1812 41.0028L41.1865 65.8258L66.0095 108.821L109.004 83.9975Z'
        stroke-width='4'
        stroke-linecap='square'
      />
    </MotionSvg>
  );
};
