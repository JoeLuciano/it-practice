import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Limitless = ({ size }) => {
  const description = 'Human potential is nearly limitless';
  return (
    <MotionSvg name='Limitless' size={size} description={description}>
      <motion.path
        d='M74.0895 73.5C64.8412 59.9413 56.5005 49.5 39.5895 49.5C23.9869 49.5 9.73367 61.9564 11.0895 77.5C12.3431 91.8711 25.1639 101 39.5895 101C56.0005 101 64.8877 90.9563 74.0895 77.5C75.1293 75.9794 75.5538 75.0233 76.5895 73.5C85.7916 59.9661 94.0005 49 110.59 49C125.504 49 138.354 60.5881 138.09 75.5C137.824 90.4323 124.524 101 109.59 101C93.0005 101 85.5081 90.5677 76.5895 77.5C75.5511 75.9785 75.1275 75.0218 74.0895 73.5Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
    </MotionSvg>
  );
};
