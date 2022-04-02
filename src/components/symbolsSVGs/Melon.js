import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const svgVariant = {
  hidden: { scale: 1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
  focus: {
    scale: 1.1,
  },
};

const pathVariant = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 4, type: 'spring', bounce: 0 },
  },
};

const SvgPath = ({ path }) => {
  return (
    <motion.path
      d={path}
      fill='rgba(255, 100, 0, 0.69)'
      strokeWidth='2'
      stroke='rgba(255, 255, 255, 0.69)'
      strokeLinecap='round'
      variants={pathVariant}
    />
  );
};

function convertRemToScaledPixels(remString) {
  const remValue = remString.replace('rem', '');
  const remInt = parseInt(remValue);
  const fontPixelSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const sizeInPixels = remInt * fontPixelSize;
  const MagicNumber = 700;
  return sizeInPixels * (MagicNumber / sizeInPixels);
}

export const Melon = ({ size = '10rem' }) => {
  const controls = useAnimation();
  const [viewPixelSize, setViewPixelSize] = useState(0);
  useEffect(() => {
    if (size) {
      setViewPixelSize(convertRemToScaledPixels(size));
    }
  }, [size]);

  return (
    <motion.svg
      className='svg'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={`0 -100 ${viewPixelSize} ${viewPixelSize}`}
      variants={svgVariant}
      animate={controls}
      onHoverStart={() => controls.start('focus')}
      onHoverEnd={() => controls.start('visible')}>
      <SvgPath
        path='M104 426 c5 -14 2 -17 -9 -12 -9 3 -13 2 -10 -4 3 -6 1 -10 -6 -10
        -16 0 -6 -124 12 -147 8 -9 9 -14 3 -10 -6 3 -11 0 -11 -8 0 -8 4 -12 8 -9 10
        6 52 -54 44 -65 -3 -5 0 -13 6 -17 8 -4 9 -3 5 4 -4 7 -1 12 9 12 9 0 14 -4
        10 -9 -3 -5 0 -13 6 -17 8 -4 9 -3 5 4 -4 7 -2 12 3 12 6 0 11 -9 11 -19 0
        -11 5 -23 12 -27 7 -5 8 -3 3 6 -6 10 -4 12 9 7 10 -4 20 -7 22 -7 3 0 3 -3 1
        -8 -3 -4 7 -8 22 -9 25 -2 63 -8 86 -14 6 -1 19 2 29 6 11 5 31 4 48 -3 27
        -10 28 -9 16 5 -11 14 -11 16 4 10 12 -4 27 2 44 18 15 14 33 25 40 25 8 0 14
        5 14 11 0 5 5 7 12 3 6 -4 8 -3 5 3 -4 6 7 25 23 43 17 19 30 43 30 54 0 17 2
        18 10 6 6 -10 8 -2 4 25 -4 31 -3 37 6 25 8 -11 9 -4 5 30 -10 75 -6 74 -260
        75 -124 0 -225 4 -225 9 0 4 -8 5 -17 2 -9 -4 -21 -1 -26 6 -6 9 -7 7 -3 -6z
        m504 -84 c-17 -175 -205 -283 -363 -208 -89 42 -154 136 -155 221 l0 40 261
        -3 261 -3 -4 -47z'
      />
      <SvgPath
        path='M120 333 c12 -60 26 -89 63 -125 101 -101 263 -95 349 14 30 38 61
        124 51 141 -10 17 -22 4 -28 -33 -14 -84 -113 -170 -195 -170 -101 0 -186 64
        -211 159 -15 60 -40 72 -29 14z'
      />

      <SvgPath
        path='M170 347 c0 -51 57 -125 113 -146 40 -15 113 -14 145 3 54 28 102 96
        102 144 0 15 -18 17 -180 17 -166 0 -180 -1 -180 -18z m135 -7 c-4 -7 2 -9 19
        -4 21 5 25 3 20 -10 -7 -19 -9 -19 -35 -5 -17 8 -19 29 -3 29 3 0 2 -5 -1 -10z
        m93 -10 c-7 -11 -20 -20 -28 -20 -13 0 -13 1 0 10 13 9 13 10 0 11 -8 0 -4 5
        10 9 14 4 26 8 28 9 1 1 -3 -8 -10 -19z m-155 -7 c-4 -11 -8 -12 -11 -5 -2 7
        -8 12 -13 12 -4 0 -5 -8 -2 -17 6 -16 5 -16 -11 -4 -13 11 -14 16 -4 22 24 16
        48 11 41 -8z m253 -2 c0 -19 -11 -22 -34 -8 -16 11 -6 27 16 27 11 0 18 -8 18
        -19z m-206 -9 c0 -14 -46 -53 -53 -45 -4 3 3 17 15 30 22 23 38 30 38 15z
        m160 -17 c13 -14 20 -28 17 -32 -8 -7 -57 35 -57 49 0 15 16 8 40 -17z m-90
        -24 c0 -37 10 -43 32 -20 16 17 16 18 0 22 -14 4 -15 5 -1 6 9 0 24 -9 35 -21
        10 -12 14 -18 7 -15 -7 4 -14 -1 -18 -13 -5 -17 -10 -19 -21 -9 -11 9 -14 8
        -15 -2 0 -10 -2 -11 -6 -1 -2 6 -11 12 -19 12 -9 0 -14 11 -14 35 0 19 5 35
        10 35 6 0 10 -13 10 -29z m-50 -26 c0 -7 6 -16 13 -18 6 -3 2 -6 -11 -6 -13
        -1 -20 3 -17 9 3 6 -1 7 -9 4 -9 -3 -16 -1 -16 5 0 6 7 11 16 11 9 0 12 5 8
        12 -4 7 -3 8 4 4 7 -4 12 -13 12 -21z'
      />
      <SvgPath path='M405 249 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z' />
      <SvgPath path='M107 165 c-4 -8 -3 -16 1 -19 4 -3 9 4 9 15 2 23 -3 25 -10 4z' />
      <SvgPath path='M316 72 c-3 -5 1 -9 9 -9 8 0 12 4 9 9 -3 4 -7 8 -9 8 -2 0 -6 -4 -9 -8z' />
    </motion.svg>
  );
};
