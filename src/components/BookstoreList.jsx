/* eslint-disable react/prop-types */
import styles from '../styles/BookstoreList.module.css';
import BookstoreItem from './BookstoreItem';

const BookstoreList = ({ bookstores }) => (
  <div className={styles.bookstoreContainer}>
    {bookstores.map((bookstore) => (
      <BookstoreItem bookstore={bookstore} key={bookstore.id} />
    ))}
  </div>
);

export default BookstoreList;
