/* eslint-disable react/prop-types */
import styles from '../styles/Item.module.css';

const Item = ({ bookstore }) => (
  <div className={styles.card}>
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

export default Item;
