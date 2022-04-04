import { motion } from 'framer-motion';
import { MotionSvg } from 'components/motionSvg/MotionSvg';
import styles from './MotionSvg.module.css';
import { useRef, useState, useEffect } from 'react';

const Description = ({ x, y }) => {
  const descriptionVariant = {
    hidden: { opacity: 0 },
    visible: { x: x, y: y, opacity: 1, transition: { duration: 2 } },
  };
  return (
    <motion.div
      className={styles.descriptionContainer}
      variants={descriptionVariant}
      initial='hidden'
      animate='visible'>
      test
    </motion.div>
  );
};

export const PersonalGrowth = ({ size }) => {
  const [hoverActive, setHoverActive] = useState(false);
  const [descriptionX, setDescriptionX] = useState();
  const [descriptionY, setDescriptionY] = useState();

  useEffect(() => {
    if (hoverActive) {
      const { x, y } = svgRef.current.getBoundingClientRect();
      setDescriptionX(x);
      setDescriptionY(y);
    }
  }, [hoverActive]);

  const svgRef = useRef(null);
  console.log();
  return (
    <>
      <Description x={descriptionX} y={descriptionY} />
      <MotionSvg size={size} svgRef={svgRef} setHoverActive={setHoverActive}>
        <motion.line x1='103' y1='125' x2='103' y2='26' strokeWidth='2' />
        <motion.line x1='76' y1='61' x2='76' y2='125' strokeWidth='2' />
        <motion.line x1='50' y1='125' x2='50' y2='84' strokeWidth='2' />
      </MotionSvg>
    </>
  );
};
