import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BookstoreContainer from './components/BookstoreContainer';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookstoreContainer />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
