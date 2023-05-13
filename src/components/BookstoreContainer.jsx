import React from 'react';
import List from './List';
import Input from './Input';
import styles from '../styles/Bookstore.module.css';

const BookstoreContainer = () => (
  <div className={styles.container}>
    <List />
    <div className={styles.horizontalDivider} />
    <Input />
  </div>
);

export default BookstoreContainer;
