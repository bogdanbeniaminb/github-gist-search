import { persistReducer } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import { createReducer } from 'reduxsauce';
import { Types } from './actions';
import { initialState, StateType } from './initialState';

export const startSearch = (
  state: StateType,
  { username }: { username: string }
): StateType => {
  return {
    ...initialState,
    username,
    searching: true,
  };
};

export const searchSuccess = (state: StateType, { user, gists }): StateType => {
  return { ...state, searching: false, user, gists };
};

export const searchFailed = (state: StateType, { error = 'Error' }): StateType => {
  return { ...state, username: '', searching: false, searchError: error };
};

export const loadGist = (state: StateType, { id }: { id: string }): StateType => {
  return {
    ...state,
    loadingGists: [...state.loadingGists, id],
    loadGistsErrors: { ...state.loadGistsErrors, [id]: undefined },
  };
};

export const loadGistSuccess = (state: StateType, { id, content }): StateType => {
  const { loadedGists, loadingGists } = state;
  return {
    ...state,
    loadingGists: loadingGists.filter(item => item != id),
    loadedGists: { ...loadedGists, [id]: content },
  };
};

export const loadGistFailed = (state: StateType, { id, error = 'Error' }): StateType => {
  const { loadingGists } = state;
  return {
    ...state,
    searching: false,
    loadingGists: loadingGists.filter(item => item != id),
    loadGistsErrors: { ...state.loadGistsErrors, [id]: error },
  };
};

export const getGistForks = (state: StateType, { id }: { id: string }): StateType => {
  return {
    ...state,
    forks: {
      ...state.forks,
      [id]: null, // this needs to be here, so that we don't keep loading it again and again
    },
  };
};

export const getGistForksSuccess = (state: StateType, { id, forks }): StateType => {
  return {
    ...state,
    forks: {
      ...state.forks,
      [id]: forks,
    },
  };
};

const reducer = createReducer(initialState, {
  [Types.SEARCH]: startSearch,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.SEARCH_FAILED]: searchFailed,

  [Types.LOAD_GIST]: loadGist,
  [Types.LOAD_GIST_SUCCESS]: loadGistSuccess,
  [Types.LOAD_GIST_FAILED]: loadGistFailed,

  [Types.GET_GIST_FORKS]: getGistForks,
  [Types.GET_GIST_FORKS_SUCCESS]: getGistForksSuccess,
});

const persistConfig: PersistConfig<StateType, any, any, any> = {
  key: 'gist-search',
  version: 1.0,
  storage,
  blacklist: ['searching', 'searchError', 'loadingGists', 'loadGistsErrors'],
};

export const persistedReducer = persistReducer(persistConfig, reducer);
export default persistedReducer;
