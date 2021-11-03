import { API } from '../../api';

const SET_AUTHORS = 'SET_AUTHORS';
const SET_POSTS = 'SET_POSTS';

const initialState = {
  authors: [],
  posts: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTHORS: {
      return {
        ...state,
        authors: [...payload],
      };
    }
    case SET_POSTS: {
      return {
        ...state,
        posts: [...payload],
      };
    }

    default:
      return state;
  }
}

export const setAuthors = (authors) => {
  return { type: SET_AUTHORS, payload: authors };
};
export const setPosts = (posts) => {
  return { type: SET_POSTS, payload: posts };
};
export const setData = () => (dispatch) => {
  API.getAuthors().then((res) => {
    dispatch(setAuthors(res.data));
  });
  API.getPosts().then((res) => {
    dispatch(setPosts(res.data));
  });
};
