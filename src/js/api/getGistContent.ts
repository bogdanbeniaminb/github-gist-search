import axios from 'axios';
import { GistInterface } from '../store/initialState';

export const getGistContent = async (gist: GistInterface): Promise<string | null> => {
  if (!Object.keys(gist.files).length) {
    return null;
  }

  const raw_url = Object.values(gist.files)[0].raw_url;

  const response = await axios.get(raw_url);
  return response.data;
};
