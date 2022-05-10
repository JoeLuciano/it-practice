import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, useAnimation, LayoutGroup } from 'framer-motion';
import styles from './MotionSvg.module.css';
import { DoAnimation, SelectedSymbol } from 'components/svgPage/SvgPage';
import { DescriptionBox } from './descriptionBox/DescriptionBox';

const containerVariant = {
  visible: {
    borderRadius: '20%',
    zIndex: 1,
    scale: 1,
    backgroundColor: 'var(--dark-background)',
  },
  focus: {
    borderRadius: '20%',
    scale: [1, 0.9, 1.2],
    zIndex: 2,
    backgroundColor: 'var(--light-background)',
    transition: {
      delayChildren: 2,
      scale: { duration: 1 },
      times: [0, 0.1, 1],
    },
  },
  clicked: {
    borderRadius: '20%',
    scale: 1.2,
    zIndex: 3,
    backgroundColor: 'var(--dark-background)',
    transition: {
      delayChildren: 2,
      scale: { duration: 1 },
    },
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

const HoverProgress = () => {
  const hoverProgressVariant = {
    hidden: { scale: 0, pathLength: 0 },
    visible: {
      scale: 1,
      pathLength: 1,
      transition: { delay: 0.2, duration: 1 },
    },
  };

  const { doAnimation } = useContext(DoAnimation);
  return (
    <motion.svg className={styles.hoverProgress} viewBox='0 0 150 150'>
      <motion.path
        variants={hoverProgressVariant}
        {...(doAnimation ? { initial: 'hidden' } : { initial: 'visible' })}
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

export const MotionSvg = ({ name, size, description, ...props }) => {
  const { doAnimation } = useContext(DoAnimation);
  const [allowHover, setAllowHover] = useState(!doAnimation);

  const [descriptionX, setDescriptionX] = useState(
    localStorage.getItem('lastDescriptionX')
  );
  const [descriptionY, setDescriptionY] = useState(
    localStorage.getItem('lastDescriptionY')
  );

  const { selectedSymbol, setSelectedSymbol } = useContext(SelectedSymbol);

  useEffect(() => {
    if (selectedSymbol === name) {
      localStorage.clear();
    }
  }, [selectedSymbol, name]);

  const svgRef = useRef(null);
  const controls = useAnimation();
  const svgSize = size ? size : '100%';

  useEffect(() => {
    const { x, y } = svgRef.current.getBoundingClientRect();
    setDescriptionX(x);
    setDescriptionY(y);
  }, [svgRef]);

  useEffect(() => {
    if (selectedSymbol === name) {
      controls.start('clicked');
    } else {
      controls.start('visible');
    }
  }, [selectedSymbol, name, controls]);

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
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    async function enableHover() {
      await delay(3000);
      setAllowHover(true);
    }
    enableHover();
  }, []);
  console.log('test');
  return (
    <>
      {selectedSymbol === name && (
        <LayoutGroup id='symbolDescriptionFullscreen'>
          <DescriptionBox
            name={name}
            description={description}
            x={descriptionX}
            y={descriptionY}
            svgPropsWithChildren={childrenWithProps}
          />
        </LayoutGroup>
      )}

      <motion.div
        ref={svgRef}
        className={styles.svgContainer}
        style={{ height: svgSize, width: svgSize }}
        variants={containerVariant}
        {...(allowHover
          ? {
              animate: controls,
              onHoverStart: () => {
                if (selectedSymbol !== name) {
                  controls.start('focus');
                }
              },
              onHoverEnd: () => {
                if (selectedSymbol !== name) {
                  controls.start('visible');
                }
              },
              onTap: () => {
                if (!selectedSymbol) {
                  setSelectedSymbol(name);
                } else if (selectedSymbol !== name) {
                  setSelectedSymbol(name);
                } else if (selectedSymbol === name) {
                  setSelectedSymbol(undefined);
                }
              },
            }
          : {})}>
        {selectedSymbol === name && <HoverProgress />}

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
    </>
  );
};
