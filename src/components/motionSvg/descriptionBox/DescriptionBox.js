import { Link } from 'react-router-dom';
import { RowLocation } from 'components/svgPage/svgRow/SvgRow';
import { motion } from 'framer-motion';
import { useContext, useRef, useEffect, useState } from 'react';
import { DoAnimation } from 'components/svgPage/SvgPage';
import { PurchaseSymbolButton } from 'components/openseaButtons/purchaseSymbolButton/PurchaseSymbolButton';
import { DynamicSymbolSvg } from 'components/dynamicSymbolSvg/DynamicSymbolSvg';
import styles from './DescriptionBox.module.css';

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

  const thisRowX = rowX === 0 ? localStorage.getItem('lastRowX') : rowX;
  const thisRowY = rowY === 0 ? localStorage.getItem('lastRowY') : rowY;

  const absoluteX = x - thisRowX;
  const absoluteY = y - thisRowY;

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
      zIndex: 4,
      pointerEvents: 'auto',
      transition: { delay: 1, duration: 1 },
    },
    returnFromFullscreen: {
      x: xFinal,
      y: yFinal,
      opacity: 1,
      zIndex: 4,
      pointerEvents: 'auto',
    },
  };

  const saveDescriptionInfo = () => {
    localStorage.setItem('lastRowX', thisRowX);
    localStorage.setItem('lastRowY', thisRowY);
    localStorage.setItem('lastDescriptionX', x);
    localStorage.setItem('lastDescriptionY', y);
    localStorage.setItem('lastSelectedSymbol', name);
    localStorage.setItem('lastSelectedSymbolSvgProps', svgPropsWithChildren);
  };

  return (
    <motion.div
      ref={containerRef}
      className={styles.descriptionContainer}
      variants={descriptionVariant}
      {...(doAnimation
        ? { initial: 'hidden' }
        : { initial: 'returnFromFullscreen' })}
      animate='visible'>
      <motion.div
        layoutId={`${name}DescriptionContainer`}
        ref={descriptionRef}
        className={styles.descriptionMessageContainer}>
        <motion.h1 className={styles.descriptionHeader}>{name}</motion.h1>
        <DynamicSymbolSvg>{svgPropsWithChildren}</DynamicSymbolSvg>
        <motion.p className={styles.descriptionMessage}>{description}</motion.p>
        <PurchaseSymbolButton symbolName={name} doAnimate={doAnimation} />
        <Link to={name} onClick={() => saveDescriptionInfo()}>
          Fullscreen
        </Link>
      </motion.div>
    </motion.div>
  );
};
