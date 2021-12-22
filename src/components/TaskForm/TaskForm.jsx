import React from 'react';
import styles from './style.module.css';
import { AiOutlineSend } from 'react-icons/ai';
import { motion } from 'framer-motion';

function TaskForm({ submitFn, formState }) {
  const [Title, setTitle] = formState;
  const handleChangeInput = (e) => setTitle(e.target.value);

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', delay: 0.2, duration: 2 }}
      className={styles.form}
      onSubmit={(e) => submitFn(e, Title)}
    >
      <h2>Create New Task</h2>
      <div className={styles.wrapper}>
        <input required onChange={handleChangeInput} value={Title} type="text" placeholder="new task..." />
        <button type="submit">
          <AiOutlineSend />
        </button>
      </div>
    </motion.form>
  );
}

export default TaskForm;
