import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const NewSkills = ({ size }) => {
  return (
    <MotionSvg size={size}>
      <motion.path d='M26 115H124.5V17' strokeWidth='2' />
      <motion.line x1='52' y1='134' x2='52' y2='99' strokeWidth='2' />
      <motion.line x1='76' y1='70' x2='76' y2='134' strokeWidth='2' />
      <motion.line x1='100' y1='134' x2='100' y2='36' strokeWidth='2' />
    </MotionSvg>
  );
};
