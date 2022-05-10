import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LayoutGroup, motion } from 'framer-motion';
import { PurchaseSymbolButton } from 'components/openseaButtons/purchaseSymbolButton/PurchaseSymbolButton';
import { DynamicSymbolSvg } from 'components/dynamicSymbolSvg/DynamicSymbolSvg';
import styles from './SymbolPage.module.css';

export const SymbolPage = () => {
  let { name } = useParams();

  const [svgPropsWithChildren, setSvgPropsWithChildren] = useState(
    localStorage.getItem('lastSelectedSymbolSvgProps')
  );

  return (
    <LayoutGroup id='symbolDescriptionFullscreen'>
      <motion.div
        className={styles.container}
        layoutId={`${name}DescriptionContainer`}>
        <PurchaseSymbolButton symbolName={name} doAnimate={false} />
        testing <div>SymbolPage</div>
        {name}
        <DynamicSymbolSvg name={name}>{svgPropsWithChildren}</DynamicSymbolSvg>
        <Link to='/'>back</Link>
      </motion.div>
    </LayoutGroup>
  );
};
