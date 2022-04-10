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

export const DescriptionBox = ({
  name,
  description,
  x,
  y,
  svgPropsWithChildren,
}) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const xStart = '-50%';
  const yStart = '-50%';
  const BoxShift = 25;
  const xMovement = x > width / 2 ? `-${BoxShift}%` : `${BoxShift}%`;
  const yMovement = y > height / 2 ? `-${10 * BoxShift}%` : `${10 * BoxShift}%`;
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

  const openseaUrl = `https://opensea.io/collection/impact-theory-founders-key?search[stringTraits][0][name]=Symbol%20%231&search[stringTraits][0][values][0]=B1%3A%20${name}`;

  return (
    <motion.div
      className={styles.descriptionContainer}
      variants={descriptionVariant}
      initial='hidden'
      animate='visible'>
      <motion.div className={styles.descriptionMessage}>
        <motion.a href={openseaUrl} target='blank'>
          Opensea
        </motion.a>
        <MiniSvg>{svgPropsWithChildren}</MiniSvg>
        <motion.h3>{description}</motion.h3>
      </motion.div>
    </motion.div>
  );
};
