export interface GistInterface {
  url: string;
  forks_url: string;
  id: string;
  commits_url: string;
  created_at: string;
  updated_at: string;
  files: Record<
    string,
    {
      filename: string;
      type: string;
      language: string;
      raw_url: string;
      size: number;
    }
  >;
  owner: {
    login: string;
    id: number;
    url: string;
    html_url: string;
    gists_url: string;
    type: string;
    avatar_url: string;
  };
}

export interface UserInterface {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  type: string;
  name: string;
  company: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  public_gists: number;
  public_repos: number;
  created_at: string;
  updated_at: string;
}

export type StateType = {
  username?: string;
  user?: UserInterface;

  searching?: boolean;
  searchError?: false | string;

  loadingGists?: string[];
  loadGistsErrors?: Record<string, string>;
  loadedGists: Record<string, string>;

  gists?: Array<GistInterface>;
  forks?: Array<any>;
};

export const initialState: StateType = {
  username: '',
  user: null,
  searching: false,
  searchError: false,
  loadingGists: [],
  loadGistsErrors: {},
  loadedGists: {},
  gists: [],
  forks: [],
};
