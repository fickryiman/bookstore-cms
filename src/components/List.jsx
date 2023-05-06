/* eslint-disable react/prop-types */
import styles from '../styles/List.module.css';
import BookstoreItem from './Item';

const List = ({ bookstores }) => (
  <div className={styles.bookstoreContainer}>
    {bookstores.map((bookstore) => (
      <BookstoreItem bookstore={bookstore} key={bookstore.id} />
    ))}
  </div>
);

export default List;
