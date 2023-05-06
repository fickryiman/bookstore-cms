import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Bookstore CMS</h1>
      <div className={styles.links}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className={styles.link} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;