import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Love = ({ size }) => {
  const description = 'Love.';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M130 53.5C130 39.5 120 25 102 25C84 25 75 39.5 75 39.5C75 39.5 66.5 25 48.5 25C29.5 25 20 39.5 20 53.5C20 86.5 75 125 75 125C75 125 130 87.8378 130 53.5Z'
        strokeWidth='2'
      />
    </MotionSvg>
  );
};
