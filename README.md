# Github-gist-search

A simple SPA to look through users' Github gists (search by user).

## Warning

If you make too many calls to the Github API, you will get locked out for a while (error 403 messages will start to appear - we have a limit of 60 API calls per hour). To work around this, you will need an API token. Generate a Personal Token inside your Developer account in Github and they put it into `src/js/api/token.ts`.

## Running it locally

To run it locally, just run:

```bash
yarn

yarn start
```

And then go to the URL displayed in the console (usually <http://localhost:8080/>).

## Issues

- The CSS has some issues (especially for smaller screens).
- The "dist" folder has been included in the repository for quicker access. Normally, this would have been gitignored.
- The UX could use some improvements.
- As mentioned above, the API sometimes locks us out.
- The API only returns 30 gists by default. We should implement pagination and load all the gists.

## Optimizations

- The forks info is loaded after the gists are loaded, in order to show some content to the users. If there are a lot of gists, it takes a lot to load this info and it's better to load it afterwards.
- The Syntax Highlighter is loaded with React.lazy, so that it doesn't block the first load that much. It's a huge component, and it's not needed right away.

## Other possible optimizations

- We should load all the user's gists (not only the 30 that the API returns by default) - implement pagination.
- We should keep track of "fork users" and don't load the same user info more than once.
- Implement IntersectionObserver lazy-loading for the "fork users" - only load for the gists that are in the viewport.
