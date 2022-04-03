import { motion } from 'framer-motion';

const svgRow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

export const SvgRow = (props) => {
  return (
    <motion.div className='svgRow' variants={svgRow}>
      {props.children}
    </motion.div>
  );
};
