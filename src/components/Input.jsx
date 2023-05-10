/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from '../styles/Input.module.css';
import { addBook } from '../redux/books/books';

const Input = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    book: '',
    category: '',
  });

  const categories = ['Action', 'Science Fiction', 'Economy', 'Nonfiction'];

  const categoryOptions = categories.map((category) => (
    <option value={category} key={category.id}>
      {category}
    </option>
  ));

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
          {categoryOptions}
        </select>
        <button
          type="submit"
          className={styles.primaryButtonBig}
          onClick={() => dispatch(addBook({ title: 'book', category: 'category' }))}
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Input;
