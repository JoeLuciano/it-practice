import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import styles from './MotionSvg.module.css';

const containerVariant = {
  visible: { scale: 1 },
  focus: {
    scale: 1.1,
  },
};

const draw = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      pathLength: {
        type: 'spring',
        duration: 2,
        bounce: 0,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
};

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

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

export const MotionSvg = ({ size, ...props }) => {
  const [allowHover, setAllowHover] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionX, setDescriptionX] = useState();
  const [descriptionY, setDescriptionY] = useState();

  const svgRef = useRef(null);
  useEffect(() => {
    if (showDescription) {
      const { x, y } = svgRef.current.getBoundingClientRect();
      setDescriptionX(x);
      setDescriptionY(y);
    }
  }, [showDescription, svgRef]);

  const childrenWithProps = React.Children.map(props.children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        stroke: '#02DFEE',
        variants: draw,
      });
    }
    return child;
  });

  useEffect(() => {
    async function enableHover() {
      await delay(3000);
      setAllowHover(true);
    }
    enableHover();
  }, []);

  const controls = useAnimation();
  const svgSize = size ? size : '100%';

  return (
    <motion.div
      ref={svgRef}
      className={styles.svgContainer}
      style={{ height: svgSize, width: svgSize }}
      variants={containerVariant}
      {...(allowHover
        ? {
            animate: controls,
            onHoverStart: () => {
              controls.start('focus');
              // setHoverActive(true);
              setShowDescription(true);
            },
            onHoverEnd: () => {
              controls.start('visible');
              // setHoverActive(false);
              setShowDescription(false);
            },
          }
        : {})}>
      {showDescription && <Description x={descriptionX} y={descriptionY} />}

      <motion.svg
        className={styles.svgComponent}
        width='150'
        height='150'
        viewBox='0 0 150 150'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ height: 'inherit', width: 'inherit' }}>
        {childrenWithProps}
      </motion.svg>
    </motion.div>
  );
};
