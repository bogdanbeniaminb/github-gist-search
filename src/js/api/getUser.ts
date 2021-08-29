import axios from 'axios';
import { UserInterface } from '../store/initialState';
import { token } from './token';

/**
 * store the loaded users promises in a cache, to prevent multiple API calls
 */
const usersCache = new Map<string, Promise<UserInterface>>();

export const getUser = async (username: string): Promise<UserInterface> => {
  if (username.match(/\//)) {
    throw new Error('Incorrect username');
  }

  // search if we have already loaded this user
  const loaded = usersCache.get(username);
  if (loaded) {
    return await loaded;
  }

  // we are NOT using octokit because it uses node-fetch, which in turn has issues with Webpack 5. It's too tricky to fix them (we have to manage node polyfills manually) and it's not worth it for the moment.
  // await octokit.request('GET /users/{username}', { username });

  const promise = async () => {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: token ? `token ${token}` : undefined,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    const user = response.data as UserInterface;
    return user;
  };
  const promisedUser = promise();

  usersCache.set(username, promisedUser);
  const user = await promisedUser;
  return user;
};
