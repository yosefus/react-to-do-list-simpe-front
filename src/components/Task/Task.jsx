import React from 'react';
import styles from './style.module.css';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { RiDeleteBinLine } from 'react-icons/ri';

function Task({ item, clickFn, first, last, deleteFn }) {
  const { title, isDone } = item;

  return (
    <li
      className={`${styles.taskBox} ${isDone ? styles.done : styles.notDone} ${first && styles.first} ${
        last && styles.last
      }`}
      onClick={() => clickFn(item)}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.icons}>
        {!isDone ? <ImCheckboxUnchecked /> : <ImCheckboxChecked />}
        <RiDeleteBinLine onClick={(e) => deleteFn(e, item)} />
      </span>
    </li>
  );
}

export default Task;
