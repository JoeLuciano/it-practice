import { motion } from 'framer-motion';

export const DynamicSymbolSvg = ({ name, ...props }) => {
  const miniVariants = {
    hidden: {},
    visible: { transition: { delayChildren: 2 } },
  };
  return (
    <motion.svg
      layoutId={`${name}DynamicSvg`}
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
