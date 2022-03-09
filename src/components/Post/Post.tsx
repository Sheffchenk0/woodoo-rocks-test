import React, { memo } from 'react';
import styles from './Post.module.css';

interface IProps {
  title: string;
  body: string;
  author: string;
}

const Item = ({ title, body, author }: IProps): JSX.Element => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{body}</div>
      <div className={styles.author}>{author}</div>
    </div>
  );
};

export default memo(Item);
