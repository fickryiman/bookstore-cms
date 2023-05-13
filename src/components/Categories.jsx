import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import styles from '../styles/Categories.module.css';

const Categories = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const status = useSelector((state) => state.categoriesReducer);

  return (
    <>
      <button
        type="submit"
        className={styles.primaryButtonBig}
        onClick={() => {
          dispatch(checkStatus());
          setMessage(status);
        }}
      >
        Check Status
      </button>
      <p className={styles.message}>{message}</p>
    </>
  );
};

export default Categories;
