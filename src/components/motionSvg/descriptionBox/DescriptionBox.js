import { motion } from 'framer-motion';
import styles from './DescriptionBox.module.css';

export const DescriptionBox = ({ description, x, y, MiniSvg }) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const xStart = '-50%';
  const yStart = '-50%';
  const xMovement = x > width / 2 ? '-100%' : '100%';
  const yMovement = y > height / 2 ? '-100%' : '100%';
  const xEnd = `calc(${xStart} + ${xMovement})`;
  const yEnd = `calc(${yStart} + ${yMovement})`;

  const descriptionVariant = {
    hidden: { x: xStart, y: yStart, opacity: 0 },
    visible: {
      x: xEnd,
      y: yEnd,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      className={styles.descriptionContainer}
      variants={descriptionVariant}
      initial='hidden'
      animate='visible'>
      <motion.div className={styles.descriptionMessage}>
        <MiniSvg />
        <motion.h3>{description}</motion.h3>
      </motion.div>
    </motion.div>
  );
};
