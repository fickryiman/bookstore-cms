import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bookstore from './components/Bookstore';
import Categories from './components/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Bookstore />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
