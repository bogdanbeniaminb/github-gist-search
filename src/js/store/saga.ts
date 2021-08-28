import { all, call, put, takeEvery, takeLatest, select } from '@redux-saga/core/effects';
import { getForks } from '../api/getForks';
import { getGistContent } from '../api/getGistContent';
import { getGists } from '../api/getGists';
import { getUser } from '../api/getUser';
import Actions, { Types } from './actions';
import { GistInterface, UserInterface } from './initialState';

/**
 * The saga for looking up the gists for a specific username
 */
export function* searchUsername({ username }: ReturnType<typeof Actions.search>) {
  try {
    const [user, gists]: [user: UserInterface, gists: GistInterface[]] = yield all([
      call(getUser, username),
      call(getGists, username),
    ]);

    // we load the forks separately, because we want to show something to the user in the meantime...

    yield put(Actions.searchSuccess(user, gists));
  } catch (error) {
    console.log({ error });
    let message = error.message;
    if (error.isAxiosError && error.response?.status == 404) {
      message = 'User not found';
    }
    yield put(Actions.searchFailed(message));
  }
}

export function* getGistForks({ id }: ReturnType<typeof Actions.getGistForks>) {
  try {
    const forks = yield call(getForks, id);
    yield put(Actions.getGistForksSuccess(id, forks));
  } catch (error) {
    console.log({ error });
  }
}

/**
 * Load the content of a gist (the first file in the gist, actually)
 */
export function* loadGist({ id }: ReturnType<typeof Actions.loadGist>) {
  try {
    const gists = yield select(state => state.gists);
    const gist = gists.find(gist => gist.id == id);
    if (!gist) throw new Error('Gist not found');

    const content = yield call(getGistContent, gist);
    yield put(Actions.loadGistSuccess(id, content));
  } catch (error) {
    console.log({ error });
    yield put(Actions.loadGistFailed(id, error.message));
  }
}

export default function* saga() {
  yield all([
    takeLatest(Types.SEARCH, searchUsername),
    takeEvery(Types.GET_GIST_FORKS, getGistForks),
    takeEvery(Types.LOAD_GIST, loadGist),
  ]);
}
