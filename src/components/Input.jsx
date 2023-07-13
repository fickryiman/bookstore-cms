/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import styles from '../styles/Input.module.css';

const Input = () => {
  const [entry, setEntry] = useState({
    title: '',
    author: '',
  });

  const categories = ['Action', 'Science Fiction', 'Economy'];

  const categoryOptions = categories.map((category) => (
    <option value={category} key={category.id}>
      {category}
    </option>
  ));

  const handleChange = (e) => {
    const input = e.target.value;

    switch (e.target.name) {
      case 'title':
        setEntry((value) => ({ ...value, title: input }));
        break;
      case 'author':
        setEntry((value) => ({ ...value, author: input }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title: entry.title,
      author: entry.author,
      category: 'none',
    };
    dispatch(addBook(newBook));
  };

  return (
    <section>
      <h2 className={styles.formTitle}>ADD NEW BOOK</h2>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Book Title"
          className={`${styles.input} ${styles.titleInput}`}
          onChange={handleChange}
        />
        <input
          name="author"
          type="text"
          placeholder="Book Author"
          className={`${styles.input} ${styles.titleInput}`}
          onChange={handleChange}
        >
          {categoryOptions}
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
