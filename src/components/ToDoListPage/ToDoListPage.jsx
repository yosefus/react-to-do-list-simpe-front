import React, { useState, useEffect } from 'react';
// components
import { TaskForm, Task, Footer, BtnGroup } from '..';
// api function
import axiosFn from '../../api/axiosFn';
// error handler
import { ToastContainer, toast } from 'react-toastify';
// style
import PacmanLoader from 'react-spinners/PacmanLoader';
import styles from './style.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

function ToDoListPage() {
  const [Data, setData] = useState([]),
    formState = useState(''),
    [, setTitle] = formState;

  Data.sort((a) => (!a.isDone ? -1 : 1));

  const getAllTasks = async () => {
    try {
      const { tasks, token } = await axiosFn({ _url: '/task', _method: 'get' });
      localStorage.token = token;
      tasks && setData(tasks);
    } catch (error) {
      toast("can't get any data");
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const handleClick = async (item) => {
    const oldData = [...Data];
    const oldState = item.isDone;
    const newData = Data.map((i) => (i._id === item._id ? { ...i, isDone: !item.isDone } : i));
    newData.sort((a) => a._id === item._id && -1);
    setData(newData);

    try {
      await axiosFn({ _url: `/task/${item._id}`, _method: 'put', _data: { isDone: !oldState } });
    } catch (error) {
      setData(oldData);
      toast('Sorry... can`t update the data');
    }
  };

  const HandleFormSubmit = async (e, title) => {
    e.preventDefault();
    try {
      const newOne = await axiosFn({ _url: `/task`, _method: 'post', _data: { title: title } });
      setData((old) => [newOne, ...old]);
    } catch (error) {
      return toast('Sorry... can`t send the data');
    }
    setTitle('');
  };

  const handleDelete = async (e, item) => {
    e.stopPropagation();
    const oldData = [...Data];
    const newData = Data.filter((i) => i._id !== item._id);
    setData(newData);
    try {
      await axiosFn({ _url: `/task/${item._id}`, _method: 'delete' });
    } catch (error) {
      setData(oldData);
      toast('Sorry... we can`t delete right now');
    }
  };

  const updateAllFn = async (didIt) => {
    const oldData = [...Data];
    const newData = Data.map((item) => {
      return { ...item, isDone: didIt };
    });
    setData(newData);
    try {
      await axiosFn({ _url: `/tasks/all`, _method: 'put', _data: { isDone: didIt } });
    } catch (error) {
      setData(oldData);
      toast('Sorry... we can`t update right now');
    }
  };

  const deleteAllFn = async () => {
    const oldData = [...Data];
    setData([]);
    try {
      await axiosFn({ _url: `/tasks/all`, _method: 'delete' });
    } catch (error) {
      setData(oldData);
      toast('Sorry... we can`t handle this action right now');
    }
  };

  const LoadingSpinner = () => (
    <div className={styles.containerLoading}>
      <PacmanLoader color="#fff" />
    </div>
  );

  const Tasks = () =>
    Data.map((item, i) => (
      <Task
        first={i === 0}
        last={i === Data.length - 1}
        item={item}
        clickFn={handleClick}
        deleteFn={handleDelete}
        key={`keyl${i}`}
      />
    ));

  return (
    <>
      <div className={styles.wrapper}>
        <ToastContainer />
        <div className={styles.container}>
          <TaskForm formState={formState} submitFn={HandleFormSubmit} />

          {Data.length < 1 ? (
            <LoadingSpinner />
          ) : (
            <motion.ul>
              <Tasks />
            </motion.ul>
          )}

          <BtnGroup updateAllFn={updateAllFn} deleteAllFn={deleteAllFn} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ToDoListPage;
