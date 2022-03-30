import { motion } from 'framer-motion';
import { Melon } from './components/symbolsSVGs/Melon';
import './App.css';

const SvgPage = (props) => {
  const svgPage = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };
  return (
    <motion.div variants={svgPage} initial='hidden' animate='visible'>
      {props.children}
    </motion.div>
  );
};

const SvgRow = (props) => {
  const svgRow = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };
  return <motion.div variants={svgRow}>{props.children}</motion.div>;
};

function App() {
  return (
    <div className='app'>
      <SvgPage>
        <SvgRow>
          <Melon />
          <Melon />
          <Melon />
          <Melon />
        </SvgRow>
        <SvgRow>
          <Melon />
          <Melon />
          <Melon />
          <Melon />
        </SvgRow>
      </SvgPage>
    </div>
  );
}

export default App;
