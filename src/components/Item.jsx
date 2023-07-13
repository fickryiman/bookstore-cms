import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import styles from '../styles/Item.module.css';

const Item = ({ bookstore }) => (
  <li>
    <div className={styles.book}>
      <div className={styles.bookContent}>
        <div className={styles.bookInfo}>
          <h4 className={styles.bookCategory}>
            {bookstore.category}
          </h4>
          <h2 className={styles.bookTitle}>
            {bookstore.title}
          </h2>
          <h6 className={styles.bookAuthor}>
            {bookstore.author}
          </h6>
          <div className={styles.actionButtons}>
            <button className={styles.buttonOutline} type="button">Comments</button>
            <div className={styles.verticalDivider} />
            <button className={styles.buttonOutline} type="button">Remove</button>
            <div className={styles.verticalDivider} />
            <button className={styles.buttonOutline} type="button">Edit</button>
          </div>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.circularProgressContainer}>
            <div className={styles.circularProgress} />
          </div>
          <div className={styles.progressStat}>
            <p className={styles.percentComplete}>
              {bookstore.progress}
              %
            </p>
            <p className={styles.completed}>Completed</p>
          </div>
          <div className={styles.progressDivider} />
          <div className={styles.currentChapterContainer}>
            <div>
              <p className={styles.currentChapterLabel}>CURRENT CHAPTER</p>
              <p className={styles.currentChapter}>
                {bookstore.chapter[Math.round(Math.random() * 24)]}
              </p>
            </div>
          </div>
          <div className={styles.progressContainer}>
            <div className={styles.circularProgressContainer}>
              <div className={styles.circularProgress} />
            </div>
            <div className={styles.progressStat}>
              <p className={styles.percentComplete}>64%</p>
              <p className={styles.completed}>Completed</p>
            </div>
            <div className={styles.progressDivider} />
            <div className={styles.currentChapterContainer}>
              <div>
                <p className={styles.currentChapterLabel}>CURRENT CHAPTER</p>
                <p className={styles.currentChapter}>Introduction</p>
              </div>
              <div>
                <button className={styles.primaryButton} type="button">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Item;
