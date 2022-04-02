import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const containerVariant = {
  visible: { scale: 1 },
  focus: {
    scale: 1.1,
  },
};

const draw = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      pathLength: {
        type: 'spring',
        duration: 1.5,
        bounce: 0,
      },
      duration: 2,
    },
  },
};

export const MotionSvg = (props) => {
  const [allowHover, setAllowHover] = React.useState(false);

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

  React.useEffect(() => {
    setAllowHover(true);
  }, []);

  const controls = useAnimation();

  return (
    <motion.div
      style={{ height: props.size, width: props.size }}
      variants={containerVariant}
      {...(allowHover ? { animate: controls } : {})}
      onHoverStart={() => controls.start('focus')}
      onHoverEnd={() => controls.start('visible')}>
      <motion.svg
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
