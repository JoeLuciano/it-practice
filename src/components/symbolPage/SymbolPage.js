import { useParams, Link } from 'react-router-dom';
import { LayoutGroup, motion } from 'framer-motion';
import styles from './SymbolPage.module.css';
import { PurchaseSymbolButton } from 'components/openseaButtons/purchaseSymbolButton/PurchaseSymbolButton';

export const SymbolPage = () => {
  let { name } = useParams();

  return (
    <LayoutGroup id='symbolDescriptionFullscreen'>
      <motion.div className={styles.container} layoutId={name}>
        <PurchaseSymbolButton symbolName={name} doAnimate={false} />
        testing <div>SymbolPage</div>
        {name}
        <Link to='/'>back</Link>
      </motion.div>
    </LayoutGroup>
  );
};
