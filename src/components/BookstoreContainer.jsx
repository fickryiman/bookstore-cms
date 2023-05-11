import React from 'react';
import { useSelector } from 'react-redux';
import BookstoreList from './List';
import BookstoreInput from './Input';
import styles from '../styles/Bookstore.module.css';

const BookstoreContainer = () => {
  const books = useSelector((state) => state.book);

  return (
    <div className={styles.container}>
      <BookstoreList books={books} />
      <div className={styles.horizontalDivider} />
      <BookstoreInput />
    </div>
  );
};

export default BookstoreContainer;
