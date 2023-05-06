import { useState } from 'react';

const Input = () => {
  const [book, setBook] = useState('');
  // const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form>
        <label>
          <input type="text" value={book} onChange={handleChange} />
        </label>
      </form>
      <h5>
        Book:
        {book}
      </h5>
    </>
  );
};

export default Input;
