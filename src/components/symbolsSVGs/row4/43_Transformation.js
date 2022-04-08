import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const Transformation = ({ size }) => {
  const description = 'Transformation.';
  return (
    <MotionSvg size={size} description={description}>
      <motion.path
        d='M20 63.5C20 80.897 34.103 95 51.5 95C68.897 95 83 80.897 83 63.5C83 46.103 68.897 32 51.5 32C34.103 32 20 46.103 20 63.5Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M67 63.5C67 80.897 81.103 95 98.5 95C115.897 95 130 80.897 130 63.5C130 46.103 115.897 32 98.5 32C81.103 32 67 46.103 67 63.5Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M41 101.5C41 113.374 50.6259 123 62.5 123C74.3741 123 84 113.374 84 101.5C84 89.6259 74.3741 80 62.5 80C50.6259 80 41 89.6259 41 101.5Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M66 101.5C66 113.374 75.6259 123 87.5 123C99.3741 123 109 113.374 109 101.5C109 89.6259 99.3741 80 87.5 80C75.6259 80 66 89.6259 66 101.5Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M110 38.5C110 45.9558 116.044 52 123.5 52C130.956 52 137 45.9558 137 38.5C137 31.0442 130.956 25 123.5 25C116.044 25 110 31.0442 110 38.5Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M13 38.5C13 45.9558 19.0442 52 26.5 52C33.9558 52 40 45.9558 40 38.5C40 31.0442 33.9558 25 26.5 25C19.0442 25 13 31.0442 13 38.5Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M100 130C100 132.761 102.239 135 105 135C107.761 135 110 132.761 110 130C110 127.239 107.761 125 105 125C102.239 125 100 127.239 100 130Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.path
        d='M40 130C40 132.761 42.2386 135 45 135C47.7614 135 50 132.761 50 130C50 127.239 47.7614 125 45 125C42.2386 125 40 127.239 40 130Z'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <motion.line
        x1='87.8944'
        y1='16.4472'
        x2='74.8944'
        y2='42.4472'
        strokeWidth='2'
      />
      <motion.line
        y1='-1'
        x2='29.0689'
        y2='-1'
        transform='matrix(0.447214 0.894427 0.894427 -0.447214 63 16)'
        strokeWidth='2'
      />
    </MotionSvg>
  );
};
