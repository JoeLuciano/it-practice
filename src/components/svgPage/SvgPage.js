import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './SvgPage.module.css';

import { Row0 } from 'components/symbolsSVGs/row0/Row0';
import { Row1 } from 'components/symbolsSVGs/row1/Row1';
import { Row2 } from 'components/symbolsSVGs/row2/Row2';
import { Row3 } from 'components/symbolsSVGs/row3/Row3';
import { Row4 } from 'components/symbolsSVGs/row4/Row4';
import { Row5 } from 'components/symbolsSVGs/row5/Row5';

import { Progress } from './../symbolsSVGs/64_Progress';

import { Joyful } from './../symbolsSVGs/74_Joyful';

import { SafeCommunity } from './../symbolsSVGs/80_SafeCommunity';

import { GreatTeacher } from './../symbolsSVGs/90_GreatTeacher';

import { SvgRow } from 'components/svgRow/SvgRow';

const svgPage = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

export const SvgPage = () => {
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setIsMobile(width < 550);
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
  }, []);

  return (
    <motion.div
      className={isMobile ? styles.mobilePage : styles.desktopPage}
      variants={svgPage}
      initial='hidden'
      animate='visible'>
      <Row0 />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
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
      <SvgRow>
        <SafeCommunity />
      </SvgRow>
      <SvgRow>
        <GreatTeacher />
      </SvgRow>
    </motion.div>
  );
};
