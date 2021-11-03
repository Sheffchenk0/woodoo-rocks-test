import styles from './Posts.module.css';

import React, { memo, useEffect, useState } from 'react';
import Post from '../Post/Post';

export default memo(function Items({ posts, authors, watchSearch }) {
  const [filteredItems, setFilteredItems] = useState(posts);
  useEffect(() => {
    if (watchSearch && posts && watchSearch.trim() !== '') {
      const newFilteredItems = posts.filter((item) => {
        let name = authors.filter((el) => el.id === item.userId)[0]?.name;
        console.log(name);
        let parts = name.split(' ');
        if (name.toUpperCase().indexOf(watchSearch.trim().toUpperCase()) === 0) {
          return true;
        }
        for (let index = 0; index < parts.length; index++) {
          const element = parts[index];
          if (element.toUpperCase().indexOf(watchSearch.trim().toUpperCase()) === 0) {
            return true;
          }
        }
        return false;
      });
      setFilteredItems(newFilteredItems);
    } else {
      setFilteredItems(posts);
    }
  }, [posts, watchSearch, authors]);
  return (
    <div className={styles.items}>
      {filteredItems.map((el) => {
        return (
          <Post
            key={el.id}
            body={el.body}
            title={el.title}
            author={authors.filter((item) => item.id === el.userId)[0]?.name}
          />
        );
      })}
    </div>
  );
});
