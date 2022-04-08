import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const MotivateAndInspire = ({ size }) => {
  const description = '';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M29 74.5C29 99.0767 48.9233 119 73.5 119C98.0767 119 118 99.0767 118 74.5C118 49.9233 98.0767 30 73.5 30C48.9233 30 29 49.9233 29 74.5Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M14 26.5C14 32.8513 19.1487 38 25.5 38C31.8513 38 37 32.8513 37 26.5C37 20.1487 31.8513 15 25.5 15C19.1487 15 14 20.1487 14 26.5Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.path
        d='M112 26.5C112 32.8513 117.149 38 123.5 38C129.851 38 135 32.8513 135 26.5C135 20.1487 129.851 15 123.5 15C117.149 15 112 20.1487 112 26.5Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.path
        d='M112 124.5C112 130.851 117.149 136 123.5 136C129.851 136 135 130.851 135 124.5C135 118.149 129.851 113 123.5 113C117.149 113 112 118.149 112 124.5Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.path
        d='M14 124.5C14 130.851 19.1487 136 25.5 136C31.8513 136 37 130.851 37 124.5C37 118.149 31.8513 113 25.5 113C19.1487 113 14 118.149 14 124.5Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
      <motion.path
        d='M62 74.5C62 80.8513 67.1487 86 73.5 86C79.8513 86 85 80.8513 85 74.5C85 68.1487 79.8513 63 73.5 63C67.1487 63 62 68.1487 62 74.5Z'
        strokeWidth='4'
        strokeLinecap='square'
      />
    </MotionSvg>
  );
};
