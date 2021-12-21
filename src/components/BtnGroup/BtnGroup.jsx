import React from 'react';
import styles from './style.module.css';

export default function BtnGroup({ deleteAllFn, updateAllFn }) {
  return (
    <div className={styles.BtnsBox}>
      <button onClick={() => updateAllFn(true)}>Did It All </button>
      <button onClick={() => updateAllFn(false)}>Didn't Do Any </button>
      <button onClick={deleteAllFn}>Delete All </button>
    </div>
  );
}
