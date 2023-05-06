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
      <NavLink className={styles.title} to="#">Bookstore CMS</NavLink>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              className={`${styles.link} ${styles.activeLink}`}
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
