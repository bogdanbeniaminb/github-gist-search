import { all, call, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { getForks } from '../api/getForks';
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
    yield put(Actions.searchFailed(error.message));
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

export default function* saga() {
  yield all([
    takeLatest(Types.SEARCH, searchUsername),
    takeEvery(Types.GET_GIST_FORKS, getGistForks),
  ]);
}
