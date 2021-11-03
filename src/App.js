import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.module.css';
import styles from './App.module.css';
import logo from './assets/images/search.png';
import Posts from './components/Posts/Posts';
import { setData } from './redux/reducers';

function App() {
  const dispatch = useDispatch();
  const { register, watch } = useForm();
  let watchSearch = watch('search');
  const { authors, posts } = useSelector((state) => ({
    authors: state.authors,
    posts: state.posts,
  }));
  useEffect(() => {
    dispatch(setData());
  }, [dispatch, setData]);
  return (
    <div className={styles.container}>
      <div className={styles.input_block}>
        <div className={styles.search_icon}>
          <img src={logo} alt="" />
        </div>
        <input type="text" placeholder="Filter by author..." {...register('search')} />
      </div>
      <Posts watchSearch={watchSearch} authors={authors} posts={posts} />
    </div>
  );
}

export default App;
