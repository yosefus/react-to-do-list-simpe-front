import React from 'react';
import styles from './style.module.css';
import { AiOutlineSend } from 'react-icons/ai';
import { motion } from 'framer-motion';

function TaskForm({ submitFn, formState }) {
  const [Title, setTitle] = formState;
  const handleChangeInput = (e) => setTitle(e.target.value);

  const formMotion = {
    hidden: { opacity: 0, y: -300 },
    show: { opacity: 1, y: 0, transaction: { type: 'spring', delay: 2, duration: 2 } },
  };

  return (
    <motion.form
      variants={formMotion}
      initial="hidden"
      animate="show"
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
