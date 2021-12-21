import React from 'react';
import styles from './style.module.css';
import { AiOutlineSend } from 'react-icons/ai';

function TaskForm({ submitFn, formState }) {
  const [Title, setTitle] = formState;
  const handleChangeInput = (e) => setTitle(e.target.value);

  return (
    <form className={styles.form} onSubmit={(e) => submitFn(e, Title)}>
      <h2>Create New Task</h2>
      <div className={styles.wrapper}>
        <input required onChange={handleChangeInput} value={Title} type="text" placeholder="new task..." />
        <button type="submit">
          <AiOutlineSend />
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
