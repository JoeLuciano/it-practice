import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
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

export const MotionSvg = ({ size, description, ...props }) => {
  const [allowHover, setAllowHover] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [requestDescription, setRequestDescription] = useState(false);
  const [descriptionX, setDescriptionX] = useState();
  const [descriptionY, setDescriptionY] = useState();

  const svgRef = useRef(null);
  useEffect(() => {
    async function showDescriptionAfterDelay() {
      await delay(2000);
      if (requestDescription) {
        const { x, y } = svgRef.current.getBoundingClientRect();
        setDescriptionX(x);
        setDescriptionY(y);
        setShowDescription(true);
      } else {
        setShowDescription(false);
      }
    }
    if (requestDescription) {
      showDescriptionAfterDelay();
    } else {
      setShowDescription(false);
    }
  }, [requestDescription, svgRef]);

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

  const MiniSvg = () => {
    const miniVariants = {
      hidden: {},
      visible: { transition: { delayChildren: 1 } },
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
        variants={miniVariants}
        initial='hidden'
        animate='visible'>
        {childrenWithProps}
      </motion.svg>
    );
  };

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
              setRequestDescription(true);
            },
            onHoverEnd: () => {
              controls.start('visible');
              setRequestDescription(false);
            },
          }
        : {})}>
      {showDescription && requestDescription && (
        <DescriptionBox
          description={description}
          x={descriptionX}
          y={descriptionY}
          MiniSvg={MiniSvg}
        />
      )}

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
