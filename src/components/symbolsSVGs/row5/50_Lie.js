import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Lie = ({ size }) => {
  const description =
    "#5 is a lie. But it's an empowering lie. Impactivists do and believe that which empowers us.";
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M27 75C27 101.51 48.4903 123 75 123C101.51 123 123 101.51 123 75C123 48.4903 101.51 27 75 27C48.4903 27 27 48.4903 27 75Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.path
        d='M65 53C65 58.5228 69.4772 63 75 63C80.5228 63 85 58.5228 85 53C85 47.4772 80.5228 43 75 43C69.4772 43 65 47.4772 65 53Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
    </MotionSvg>
  );
};
