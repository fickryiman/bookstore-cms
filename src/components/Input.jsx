import { useState } from 'react';

const Input = () => {
  const [state, setState] = useState({
    book: '',
    category: '',
  });
  // const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.value]: e.target.value,
    });
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form>
        <label>
          <input
            name="book"
            type="text"
            placeholder="Book Title"
            value={state.book}
            onChange={handleChange}
          />
        </label>
        <label>
          <input type="text" value={state.book} onChange={handleChange} />
        </label>
      </form>
      <h5>
        Book:
        {state.book}
      </h5>
    </>
  );
};

export default Input;
