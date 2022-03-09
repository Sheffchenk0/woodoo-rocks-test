import styles from './Posts.module.css';
import React, { memo, useEffect, useState } from 'react';
import Post from '../Post/Post';
import { IAuthor, IPost } from '../../interfaces';
import { filterPostsByAuthor } from './helpers';

interface IProps {
  posts: IPost[];
  authors: IAuthor[];
  watchSearch: string;
}

const Items = ({ posts, authors, watchSearch }: IProps): JSX.Element => {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>(posts);
  useEffect(() => {
    if (watchSearch && posts && watchSearch.trim() !== '') {
      const filteredItems = filterPostsByAuthor(watchSearch, posts, authors);
      setFilteredPosts(filteredItems);
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, watchSearch, authors]);
  return (
    <div className={styles.items}>
      {filteredPosts &&
        filteredPosts.map((el) => {
          return (
            <Post
              key={el.id}
              body={el.body}
              title={el.title}
              author={authors.filter((item) => item.id === el.userId)[0].name}
            />
          );
        })}
    </div>
  );
};
export default memo(Items);
