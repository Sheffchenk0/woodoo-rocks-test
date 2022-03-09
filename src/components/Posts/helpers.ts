import { IPost, IAuthor } from './../../interfaces';

export const filterPostsByAuthor = (str: string, posts: IPost[], authors: IAuthor[]) => {
  return posts.filter((item) => {
    let name = authors.filter((el) => el.id === item.userId)[0]?.name;
    console.log(name);
    let parts = name.split(' ');
    if (name.toUpperCase().indexOf(str.trim().toUpperCase()) === 0) {
      return true;
    }
    for (let index = 0; index < parts.length; index++) {
      const element = parts[index];
      if (element.toUpperCase().indexOf(str.trim().toUpperCase()) === 0) {
        return true;
      }
    }
    return false;
  });
};
