import axios from 'axios';
import { UserInterface } from '../store/initialState';
import { token } from './token';

export const getUser = async (username: string): Promise<UserInterface> => {
  if (username.match(/\//)) {
    throw new Error('Incorrect username');
  }

  // we are NOT using octokit because it uses node-fetch, which in turn has issues with Webpack 5. It's too tricky to fix them (we have to manage node polyfills manually) and it's not worth it for the moment.
  // await octokit.request('GET /users/{username}', { username });

  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: token ? `token ${token}` : undefined,
      Accept: 'application/vnd.github.v3+json',
    },
  });

  return response.data || [];
};
