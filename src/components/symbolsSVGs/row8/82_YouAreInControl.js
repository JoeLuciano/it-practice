import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const YouAreInControl = ({ size }) => {
  const description = '';
  return (
    <MotionSvg
      name='YouAreInControl'
      size={size}
      description={description}></MotionSvg>
  );
};
