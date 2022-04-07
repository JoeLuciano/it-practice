import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const BecomeThat = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path
        d='M75 25L18 125H132L75 25Z'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <motion.path
        d='M85.4196 50.5676L33 103.374L104.413 122.509L85.4196 50.5676Z'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <motion.path
        d='M90.0676 77.1306L54 86.937L80.2612 113.198L90.0676 77.1306Z'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </MotionSvg>
  );
};
