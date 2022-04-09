import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const ClearGoals = ({ size }) => {
  const description = 'Have VERY clear goals.';
  return (
    <MotionSvg name='ClearGoals' size={size} description={description}>
      <motion.path
        d='M28 81C28 106.957 49.0426 128 75 128C100.957 128 122 106.957 122 81C122 55.0426 100.957 34 75 34C49.0426 34 28 55.0426 28 81Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.path
        d='M61 80.5C61 87.9558 67.0442 94 74.5 94C81.9558 94 88 87.9558 88 80.5C88 73.0442 81.9558 67 74.5 67C67.0442 67 61 73.0442 61 80.5Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.line x1='75' y1='21' x2='75' y2='95' strokeWidth='4' />
    </MotionSvg>
  );
};
