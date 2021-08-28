import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getGists } from '../api/getGists';
import { getUser } from '../api/getUser';
import Actions, { Types } from './actions';

/**
 * The saga for looking up the gists for a specific username
 */
export function* searchUsername({ username }: ReturnType<typeof Actions.search>) {
  try {
    const [user, gists] = yield all([call(getUser, username), call(getGists, username)]);
    console.log({ user, gists });
    yield put(Actions.searchSuccess(user, gists, []));
  } catch (error) {
    console.log({ error });
    yield put(Actions.searchFailed(error.message));
  }
}

export default function* saga() {
  yield all([takeLatest(Types.SEARCH, searchUsername)]);
}
