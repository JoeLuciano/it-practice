import { motion } from 'framer-motion';
import styles from './DescriptionBox.module.css';

const MiniSvg = (props) => {
  const miniVariants = {
    hidden: {},
    visible: { transition: { delayChildren: 2 } },
  };
  return (
    <motion.svg
      className={styles.svgComponent}
      width='150'
      height='150'
      viewBox='0 0 150 150'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ height: '10rem', width: '10rem' }}
      variants={miniVariants}>
      {props.children}
    </motion.svg>
  );
};

export const DescriptionBox = ({ description, x, y, svgPropsWithChildren }) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const xStart = '-50%';
  const yStart = '-50%';
  const BoxShift = '150%';
  const xMovement = x > width / 2 ? `-${BoxShift}` : `${BoxShift}`;
  const yMovement = y > height / 2 ? `-${BoxShift}` : `${BoxShift}`;
  const xEnd = `calc(${xStart} + ${xMovement})`;
  const yEnd = `calc(${yStart} + ${yMovement})`;

  const descriptionVariant = {
    hidden: {
      x: xStart,
      y: yStart,
      opacity: 0,
      zIndex: -1,
      pointerEvents: 'none',
    },
    visible: {
      x: xEnd,
      y: yEnd,
      opacity: 1,
      zIndex: 3,
      pointerEvents: 'auto',
      transition: { delay: 1, duration: 1 },
    },
  };
  return (
    <motion.div
      className={styles.descriptionContainer}
      variants={descriptionVariant}
      initial='hidden'
      animate='visible'>
      <motion.div className={styles.descriptionMessage}>
        <MiniSvg>{svgPropsWithChildren}</MiniSvg>
        <motion.h3>{description}</motion.h3>
      </motion.div>
    </motion.div>
  );
};
