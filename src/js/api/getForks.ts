import axios from 'axios';
import { ForkInterface } from '../store/initialState';
import { getUser } from './getUser';
export const getForks = async (gistId: string) => {
  // we are NOT using octokit because it uses node-fetch, which in turn has issues with Webpack 5. It's too tricky to fix them (we have to manage node polyfills manually) and it's not worth it for the moment.
  // await octokit.request('GET /{gist_id}/forks', { gist_id: gistId });

  const response = await axios.get(`https://api.github.com/gists/${gistId}/forks`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  const forks = (response.data || []) as ForkInterface[];

  // get the authors for the first 3 forks
  const forkAuthorsPromises = forks.slice(0, 3).map(fork => getUser(fork.owner.login));
  const forkAuthors = await Promise.all(forkAuthorsPromises);

  return {
    number: forks.length,
    forkAuthors,
  };
};
