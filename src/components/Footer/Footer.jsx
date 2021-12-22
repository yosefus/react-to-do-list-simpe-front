import React from 'react';
import styles from './style.module.css';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 2, delay: 2 }}
      className={styles.footer}
    >
      <a rel="noreferrer" target="_blank" href="https://yosefus-portfolio.netlify.app/">
        yosefus flavius
      </a>
    </motion.footer>
  );
}
