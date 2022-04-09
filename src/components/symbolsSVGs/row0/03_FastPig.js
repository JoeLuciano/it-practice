import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';

export const FastPig = ({ size }) => {
  const description =
    "You can't make a racehorse out of a pig, but you can make a really fast pig.";
  return (
    <MotionSvg name='FastPig' size={size} description={description}>
      <motion.path
        d='M29.5 79.5C29.5 104.629 49.871 125 75 125C100.129 125 120.5 104.629 120.5 79.5C120.5 54.371 100.129 34 75 34C49.871 34 29.5 54.371 29.5 79.5Z'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <motion.path d='M32 64.5L27 25L61 36' strokeWidth='3' />
      <motion.path d='M117.5 63.5L122.5 25L88.5 36' strokeWidth='3' />
      <motion.path
        d='M41.5 86C41.5 90.9706 45.5294 95 50.5 95C55.4706 95 59.5 90.9706 59.5 86C59.5 81.0294 55.4706 77 50.5 77C45.5294 77 41.5 81.0294 41.5 86Z'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <motion.path
        d='M89.5 86C89.5 90.9706 93.5294 95 98.5 95C103.471 95 107.5 90.9706 107.5 86C107.5 81.0294 103.471 77 98.5 77C93.5294 77 89.5 81.0294 89.5 86Z'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <motion.path
        d='M64.5 113.5C64.5 114.881 65.6193 116 67 116C68.3807 116 69.5 114.881 69.5 113.5C69.5 112.119 68.3807 111 67 111C65.6193 111 64.5 112.119 64.5 113.5Z'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <motion.path
        d='M80.5 113.5C80.5 114.881 81.6193 116 83 116C84.3807 116 85.5 114.881 85.5 113.5C85.5 112.119 84.3807 111 83 111C81.6193 111 80.5 112.119 80.5 113.5Z'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <motion.path
        d='M52 118C52 118 55.172 107.181 60 102.5C67.2201 95.5 75 96 75 96M75 96V34M75 96C75 96 83.9828 95.5 91 102.5C95.7022 107.191 98.5 118 98.5 118'
        strokeWidth='3'
        strokeLinecap='round'
      />
    </MotionSvg>
  );
};
