import { useRef, createContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SvgRow.module.css';

const svgRow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

export const RowLocation = createContext(null);

export const SvgRow = (props) => {
  const svgRowRef = useRef(null);
  const [rowX, setRowX] = useState(0);
  const [rowY, setRowY] = useState(0);

  useEffect(() => {
    const { x, y } = svgRowRef.current.getBoundingClientRect();
    setRowX(x);
    setRowY(y);
  }, [svgRowRef]);

  return (
    <RowLocation.Provider value={{ rowX, rowY }}>
      <motion.div ref={svgRowRef} className={styles.svgRow} variants={svgRow}>
        {props.children}
      </motion.div>
    </RowLocation.Provider>
  );
};
