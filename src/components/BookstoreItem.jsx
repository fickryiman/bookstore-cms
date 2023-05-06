/* eslint-disable react/prop-types */
import styles from '../styles/BookstoreItem.module.css';

const BookstoreItem = ({ bookstore }) => (
  <div className={styles.lists}>
    <div className={styles.list}>
      <div className={styles.category}>
        {bookstore.category}
      </div>
      <div className={styles.title}>
        {bookstore.title}
      </div>
      <div className={styles.author}>
        {bookstore.author}
      </div>
    </div>
  </div>
);

export default BookstoreItem;
