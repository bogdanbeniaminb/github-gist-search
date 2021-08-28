import { persistReducer } from 'redux-persist';
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

export const searchSuccess = (state: StateType, { user, gists, forks }): StateType => {
  return { ...state, searching: false, user, gists, forks };
};

export const searchFailed = (state: StateType, { error = 'Error' }): StateType => {
  return { ...state, searching: false, searchError: error };
};

export const loadGist = (state: StateType, { id }: { id: string }): StateType => {
  return {
    ...state,
    loadingGists: [...state.loadingGists, id],
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
  return {
    ...state,
    searching: false,
    loadGistsErrors: { ...state.loadGistsErrors, [id]: error },
  };
};

const reducer = createReducer(initialState, {
  [Types.SEARCH]: startSearch,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.SEARCH_FAILED]: searchFailed,

  [Types.LOAD_GIST]: loadGist,
  [Types.LOAD_GIST_SUCCESS]: loadGistSuccess,
  [Types.LOAD_GIST_FAILED]: loadGistFailed,
});

const persistConfig = {
  key: 'gist-search',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, reducer);
export default persistedReducer;
