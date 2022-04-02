import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './styles.css';

const svgVariant = {
  hidden: {},
  visible: {},
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

export const MoveToGoals = ({ size }) => {
  // const controls = useAnimation();

  return (
    // <motion.div style={{ height: size, width: size }}>
    <motion.svg
      variants={svgVariant}
      width='150'
      height='150'
      viewBox='0 0 150 150'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ height: 'inherit', width: 'inherit' }}>
      <motion.rect
        x='26'
        y='32'
        width='98'
        height='98'
        stroke='#02DFEE'
        stroke-width='2'
        variants={draw}
      />
      <motion.line
        x1='75'
        y1='20'
        x2='75'
        y2='95'
        stroke='#02DFEE'
        stroke-width='4'
        variants={draw}
      />
      <motion.circle
        cx='75'
        cy='81'
        r='46'
        stroke='#02DFEE'
        stroke-width='4'
        variants={draw}
      />
      <motion.circle
        cx='75'
        cy='81'
        r='13'
        stroke='#02DFEE'
        stroke-width='4'
        variants={draw}
      />
    </motion.svg>
    // </motion.div>
  );
};
