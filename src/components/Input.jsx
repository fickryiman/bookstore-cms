import { useState } from 'react';
import styles from '../styles/Input.module.css';

const Input = () => {
  const [state, setState] = useState({
    book: '',
    category: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.value]: e.target.value,
    });
  };

  return (
    <section>
      <h2 className={styles.formTitle}>ADD NEW BOOK</h2>
      <form className={styles.addForm}>
        <input
          name="book"
          type="text"
          placeholder="Book Title"
          className={`${styles.input} ${styles.titleInput}`}
          onChange={handleChange}
        />
        <select
          id="category"
          name="category"
          type="text"
          className={`${styles.input} ${styles.categoryInput}`}
          onChange={handleChange}
        >
          <option disabled style={{ color: '#a09d9d' }}>Author</option>
          <option>Suzanne Collins</option>
          <option>Frank Herbert</option>
        </select>
        <button
          type="submit"
          className={styles.primaryButtonBig}
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Input;
