import React, { memo } from 'react';
import styles from './Post.module.css';

export default memo(function Item({ title, body, author }) {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{body}</div>
      <div className={styles.author}>{author}</div>
    </div>
  );
});
