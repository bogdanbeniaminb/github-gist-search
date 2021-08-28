# Github-gist-search

A simple SPA to look through users' Github gists (search by user).

## Warning

If you make too many calls to the Github API, you will get locked out for a while (error 403 messages will start to appear). To work around this, you will need an API token.

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
