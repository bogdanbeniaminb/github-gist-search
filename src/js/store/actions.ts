import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  search: ['username'],
  searchSuccess: ['user', 'gists', 'forks'],
  searchFailed: ['error'],

  loadGist: ['id'],
  loadGistSuccess: ['id', 'content'],
  loadGistFailed: ['id', 'error'],
});

export const Actions = Creators;
export default Creators;
