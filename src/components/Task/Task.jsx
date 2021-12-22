import React from 'react';
import styles from './style.module.css';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { RiDeleteBinLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

function Task({ item, clickFn, first, last, deleteFn }) {
  const { title, isDone } = item;

  const listItem = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  return (
    <motion.li
      className={`${styles.taskBox} ${isDone ? styles.done : styles.notDone} ${first && styles.first} ${
        last && styles.last
      }`}
      variants={listItem}
      onClick={() => clickFn(item)}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.icons}>
        {!isDone ? <ImCheckboxUnchecked /> : <ImCheckboxChecked />}
        <RiDeleteBinLine onClick={(e) => deleteFn(e, item)} />
      </span>
    </motion.li>
  );
}

export default Task;
