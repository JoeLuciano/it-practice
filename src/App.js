import { motion } from 'framer-motion';
import { Melon } from './components/symbolsSVGs/Melon';
import { MoveToGoals } from './components/symbolsSVGs/MoveToGoals';
import './App.css';

const SvgPage = (props) => {
  const svgPage = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  return (
    <motion.div
      className='svg-page'
      variants={svgPage}
      initial='hidden'
      animate='visible'>
      {props.children}
    </motion.div>
  );
};

const SvgRow = (props) => {
  const svgRow = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  return (
    <motion.div className='svgRow' variants={svgRow}>
      {props.children}
    </motion.div>
  );
};

function App() {
  return (
    <div className='app'>
      <SvgPage>
        <SvgRow>
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
        </SvgRow>
        <SvgRow>
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
        </SvgRow>
        <SvgRow>
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
        </SvgRow>
        <SvgRow>
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
          <MoveToGoals size='10rem' />
        </SvgRow>
      </SvgPage>
    </div>
  );
}

export default App;
