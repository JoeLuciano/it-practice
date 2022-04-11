import { Link } from 'react-router-dom';
import { RowLocation } from 'components/svgPage/svgRow/SvgRow';
import { motion } from 'framer-motion';
import styles from './DescriptionBox.module.css';
import { useContext, useRef, useEffect, useState } from 'react';
import { DoAnimation } from 'components/svgPage/SvgPage';
import { PurchaseSymbolButton } from 'components/openseaButtons/purchaseSymbolButton/PurchaseSymbolButton';

const MiniSvg = (props) => {
  const miniVariants = {
    hidden: {},
    visible: { transition: { delayChildren: 2 } },
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
      variants={miniVariants}>
      {props.children}
    </motion.svg>
  );
};

export const DescriptionBox = ({
  name,
  description,
  x,
  y,
  svgPropsWithChildren,
}) => {
  const { doAnimation } = useContext(DoAnimation);
  const { rowX, rowY } = useContext(RowLocation);

  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const height = containerRef.current.clientHeight;
    setContainerHeight(height);
  }, [containerRef]);

  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const [descriptionWidth, setDescriptionWidth] = useState(0);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const height = descriptionRef.current.clientHeight;
    const width = descriptionRef.current.clientHeight;
    setDescriptionHeight(height);
    setDescriptionWidth(width);
  }, [descriptionRef]);

  const absoluteX = x - rowX;
  const absoluteY = y - rowY;

  const moveCenter = containerHeight / 2;
  const moveRight = descriptionWidth / 3 + containerHeight / 2;
  const moveLeft = -descriptionWidth / 2 + containerHeight;

  const moveDown = descriptionHeight / 2 + containerHeight;
  const moveUp = -descriptionHeight / 2 - containerHeight + 10;

  const width = window.innerWidth;
  const height = window.innerHeight;

  const xMovement =
    x > width / 2
      ? moveLeft
      : x < width / 2 - containerHeight
      ? moveRight
      : moveCenter;
  const yMovement = y > height / 2 ? moveUp : moveDown;

  const xFinal = `calc(${absoluteX}px + ${xMovement}px)`;
  const yFinal = `calc(${absoluteY}px + ${yMovement}px)`;

  const descriptionVariant = {
    hidden: {
      x: absoluteX,
      y: absoluteY,
      opacity: 0,
      zIndex: -1,
      pointerEvents: 'none',
    },
    visible: {
      x: xFinal,
      y: yFinal,
      opacity: 1,
      zIndex: 3,
      pointerEvents: 'auto',
      transition: { delay: 1, duration: 1 },
    },
    returnFromFullscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      zIndex: 3,
      pointerEvents: 'auto',
    },
  };

  const saveDescriptionInfo = () => {
    localStorage.setItem('lastDescriptionX', x);
    localStorage.setItem('lastDescriptionY', y);
    localStorage.setItem('lastSelectedSymbol', name);
  };

  return (
    <motion.div
      ref={containerRef}
      className={styles.descriptionContainer}
      variants={descriptionVariant}
      {...(doAnimation
        ? { initial: 'hidden' }
        : { initial: 'returnFromFullscreen' })}
      animate='visible'
      layoutId={name}>
      <motion.div
        ref={descriptionRef}
        className={styles.descriptionMessageContainer}>
        <motion.h1 className={styles.descriptionHeader}>{name}</motion.h1>
        <MiniSvg>{svgPropsWithChildren}</MiniSvg>
        <motion.p className={styles.descriptionMessage}>{description}</motion.p>
        <PurchaseSymbolButton symbolName={name} doAnimate={doAnimation} />
        <Link to={name} onClick={() => saveDescriptionInfo()}>
          Fullscreen
        </Link>
      </motion.div>
    </motion.div>
  );
};
