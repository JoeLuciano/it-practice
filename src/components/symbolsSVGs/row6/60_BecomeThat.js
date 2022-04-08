import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const BecomeThat = ({ size }) => {
  const description =
    "It doesn't matter who you are today. It only matters who you want to become and how hard you are willing to work to become that person.";
  return (
    <MotionSvg size={size} description={description}>
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
