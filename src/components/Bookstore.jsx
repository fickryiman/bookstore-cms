import styles from '../styles/Bookstore.module.css';

import BookstoreList from './List';
import BookstoreInput from './Input';

const Bookstore = () => {
  const bookstores = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: 39,
      chapter: ['Introduction', 'Chapter1', 'Chapter2', 'Chapter3', 'Chapter4', 'Chapter5', 'Chapter6', 'Chapter7',
        'Chapter8', 'Chapter9', 'Chapter10', 'Chapter11', 'Chapter12', 'Chapter13', 'Chapter14', 'Chapter15',
        'Chapter16', 'Chapter17', 'Chapter18', 'Chapter19', 'Chapter20', 'Chapter21', 'Chapter22', 'Chapter23',
      ],
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: 18,
      chapter: ['Introduction', 'Chapter1', 'Chapter2', 'Chapter3', 'Chapter4', 'Chapter5', 'Chapter6', 'Chapter7',
        'Chapter8', 'Chapter9', 'Chapter10', 'Chapter11', 'Chapter12', 'Chapter13', 'Chapter14', 'Chapter15',
        'Chapter16', 'Chapter17', 'Chapter18', 'Chapter19', 'Chapter20', 'Chapter21', 'Chapter22', 'Chapter23',
      ],
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      progress: 64,
      chapter: ['Introduction', 'Chapter1', 'Chapter2', 'Chapter3', 'Chapter4', 'Chapter5', 'Chapter6', 'Chapter7',
        'Chapter8', 'Chapter9', 'Chapter10', 'Chapter11', 'Chapter12', 'Chapter13', 'Chapter14', 'Chapter15',
        'Chapter16', 'Chapter17', 'Chapter18', 'Chapter19', 'Chapter20', 'Chapter21', 'Chapter22', 'Chapter23',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <BookstoreList bookstores={bookstores} />
      <div className={styles.horizontalDivider} />
      <BookstoreInput />
    </div>
  );
};

export default Bookstore;
