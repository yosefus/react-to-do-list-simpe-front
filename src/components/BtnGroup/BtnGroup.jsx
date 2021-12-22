import { motion } from 'framer-motion';
import React from 'react';
import styles from './style.module.css';

export default function BtnGroup({ deleteAllFn, updateAllFn }) {
  return (
    <div className={styles.BtnsBox}>
      <motion.button
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', duration: 1, delay: 2.4 }}
        onClick={() => updateAllFn(true)}
      >
        Did It All{' '}
      </motion.button>
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 1, delay: 2.2 }}
        onClick={() => updateAllFn(false)}
      >
        Didn't Do Any{' '}
      </motion.button>
      <motion.button
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', duration: 1, delay: 2 }}
        onClick={deleteAllFn}
      >
        Delete All{' '}
      </motion.button>
    </div>
  );
}
