import { motion } from 'framer-motion';
import styles from './SvgPage.module.css';

import { Row0 } from 'components/symbolsSVGs/row0/Row0';
import { Row1 } from 'components/symbolsSVGs/row1/Row1';
import { Row2 } from 'components/symbolsSVGs/row2/Row2';
import { Row3 } from 'components/symbolsSVGs/row3/Row3';
import { Row4 } from 'components/symbolsSVGs/row4/Row4';
import { Row5 } from 'components/symbolsSVGs/row5/Row5';
import { Row6 } from 'components/symbolsSVGs/row6/Row6';
import { Row7 } from 'components/symbolsSVGs/row7/Row7';
import { Row8 } from 'components/symbolsSVGs/row8/Row8';
import { Row9 } from 'components/symbolsSVGs/row9/Row9';

const svgPage = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Create global context for which element is focused
//   const [disableHoverChanges, setDisableHoverChanges] = useState(false);

export const SvgPage = () => {
  return (
    <motion.div
      className={styles.svgPage}
      variants={svgPage}
      initial='hidden'
      animate='visible'>
      <Row0 />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
    </motion.div>
  );
};
