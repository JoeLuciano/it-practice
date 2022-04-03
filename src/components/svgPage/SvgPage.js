import { motion } from 'framer-motion';

import { Limitless } from './../symbolsSVGs/00_Limitless';
import { ShareLessons } from './../symbolsSVGs/01_ShareLessons';
import { MoveToGoals } from './../symbolsSVGs/02_MoveToGoals';
import { FastPig } from './../symbolsSVGs/03_FastPig';
import { Passion } from './../symbolsSVGs/04_Passion';

import { PersonalGrowth } from './../symbolsSVGs/10_PersonalGrowth';
import { Luck } from './../symbolsSVGs/14_Luck';

import { NewSkills } from './../symbolsSVGs/20_NewSkills';
import { Passion2 } from './../symbolsSVGs/24_Passion2';

import { Focus } from './../symbolsSVGs/30_Focus';
import { SharedPrupose } from './../symbolsSVGs/34_SharedPurpose';

import { Anything } from './../symbolsSVGs/40_Anything';
import { Commit } from './../symbolsSVGs/44_Commit';

import { TopPriority } from './../symbolsSVGs/54_TopPriority';

import { Progress } from './../symbolsSVGs/64_Progress';

import { Joyful } from './../symbolsSVGs/74_Joyful';

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

export const SvgPage = () => {
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
      <SvgRow>
        <Limitless />
        <ShareLessons />
        <MoveToGoals />
        <FastPig />
        <Passion />
      </SvgRow>
      <SvgRow>
        <PersonalGrowth />
        <MoveToGoals />
        <FastPig />
        <MoveToGoals />
        <Luck />
      </SvgRow>
      <SvgRow>
        <NewSkills />
        <MoveToGoals />
        <MoveToGoals />
        <MoveToGoals />
        <Passion2 />
      </SvgRow>
      <SvgRow>
        <Focus />
        <ShareLessons />
        <MoveToGoals />
        <MoveToGoals />
        <SharedPrupose />
      </SvgRow>
      <SvgRow>
        <Anything />
        <Commit />
        <Commit />
        <Commit />
        <Commit />
      </SvgRow>
      <SvgRow>
        <TopPriority />
        <TopPriority />
        <TopPriority />
        <TopPriority />
        <TopPriority />
      </SvgRow>
      <SvgRow>
        <Progress />
        <Progress />
        <Progress />
        <Progress />
        <Progress />
      </SvgRow>
      <SvgRow>
        <Joyful />
        <Joyful />
        <Joyful />
        <Joyful />
        <Joyful />
      </SvgRow>
    </motion.div>
  );
};
