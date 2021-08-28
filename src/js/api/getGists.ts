import axios from 'axios';
import { GistInterface } from '../store/initialState';
// import { token } from './token';

export const getGists = async (username: string): Promise<GistInterface[]> => {
  // we are NOT using octokit because it uses node-fetch, which in turn has issues with Webpack 5. It's too tricky to fix them (we have to manage node polyfills manually) and it's not worth it for the moment.
  // await octokit.request('GET /users/{username}/gists', { username });

  const response = await axios.get(`https://api.github.com/users/${username}/gists`, {
    headers: {
      // Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });
  const gists = (response.data as GistInterface[]) || [];

  return gists.map(gist => {
    return {
      ...gist,
      // we also add the correct URL for displaying on the web. The URLs returned by the API are also API endpoints, so they are not usable.
      html_url: `https://gist.github.com/${username}/${gist.id}`,
    };
  });
};
