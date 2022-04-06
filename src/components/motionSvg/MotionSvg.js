import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './MotionSvg.module.css';

const containerVariant = {
  visible: { zIndex: 0, scale: 1 },
  focus: {
    scale: 1.5,
    zIndex: 20,
    transition: { delay: 0.2, duration: 0.5 },
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
  const width = window.innerWidth;
  const height = window.innerHeight;
  const xStart = '-50%';
  const yStart = '-50%';
  const xMovement = x > width / 2 ? '-50%' : '50%';
  const yMovement = y > height / 2 ? '-50%' : '50%';
  const xEnd = `calc(${xStart} + ${xMovement})`;
  const yEnd = `calc(${yStart} + ${yMovement})`;

  const descriptionVariant = {
    hidden: { x: xStart, y: yStart, opacity: 0 },
    visible: {
      x: xEnd,
      y: yEnd,
      opacity: 1,
      transition: { delay: 0.2, duration: 1 },
    },
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
