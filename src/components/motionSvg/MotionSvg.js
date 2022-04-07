import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import styles from './MotionSvg.module.css';
import { DescriptionBox } from './descriptionBox/DescriptionBox';

const containerVariant = {
  visible: { zIndex: 0, scale: 1 },
  focus: {
    scale: 1.5,
    zIndex: 20,
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

const HoverProgress = () => {
  const hoverProgressVariant = {
    hidden: { scale: 1.4, pathLength: 0 },
    visible: { scale: 1.4, pathLength: 1, transition: { duration: 1 } },
  };
  return (
    <motion.svg className={styles.hoverProgress} viewBox='0 0 150 150'>
      <motion.path
        variants={hoverProgressVariant}
        initial='hidden'
        animate='visible'
        fill='black'
        d='M23 75.5C23 103.943 46.0573 127 74.5 127C102.943 127 126 103.943 126 75.5C126 47.0573 102.943 24 74.5 24C46.0573 24 23 47.0573 23 75.5Z'
        strokeWidth='3'
        stroke='white'
        strokeDasharray='0 1'
        strokeLinecap='square'
      />
    </motion.svg>
  );
};

export const MotionSvg = ({ size, description, ...props }) => {
  const [allowHover, setAllowHover] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionX, setDescriptionX] = useState();
  const [descriptionY, setDescriptionY] = useState();

  const svgRef = useRef(null);
  useEffect(() => {
    function setDescriptionVariables() {
      const { x, y } = svgRef.current.getBoundingClientRect();
      setDescriptionX(x);
      setDescriptionY(y);
    }
    if (showDescription) {
      setDescriptionVariables();
    }
  }, [showDescription, svgRef]);

  const childrenWithProps = React.Children.map(props.children, (child) => {
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
              setShowDescription(true);
            },
            onHoverEnd: () => {
              controls.start('visible');
              setShowDescription(false);
            },
          }
        : {})}>
      <AnimatePresence>
        {showDescription && <HoverProgress />}
        {showDescription && (
          <DescriptionBox
            description={description}
            x={descriptionX}
            y={descriptionY}
            svgPropsWithChildren={childrenWithProps}
          />
        )}
      </AnimatePresence>

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
