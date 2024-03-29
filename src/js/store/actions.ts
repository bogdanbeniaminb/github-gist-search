import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  search: ['username'],
  searchSuccess: ['user', 'gists'],
  searchFailed: ['error'],

  loadGist: ['id'],
  loadGistSuccess: ['id', 'content'],
  loadGistFailed: ['id', 'error'],

  getGistForks: ['id'],
  getGistForksSuccess: ['id', 'forks'],
});

export const Actions = Creators;
export default Creators;
