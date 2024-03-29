import { useEffect } from 'react';
import { Actions } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { GistInterface } from '../../store/initialState';

export const GistForks = ({ gist: { id: gistId } }: { gist: GistInterface }) => {
  const forks = useAppSelector(state => state.forks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // load the forks info
    if (!(gistId in forks)) {
      dispatch(Actions.getGistForks(gistId));
    }
  }, [gistId]);

  const gistForks = forks[gistId];
  if (!gistForks || !gistForks.number) return null;

  const authors = gistForks.forkAuthors.map(user => (
    <a
      className='gist-forker'
      href={user.html_url}
      target='_blank'
      rel='noopener noreferrer'
      key={user.id}
    >
      <figure className='gist-forker-image'>
        <img loading='lazy' src={user.avatar_url} alt={user.name} />
      </figure>
      {user.login}
    </a>
  ));

  return <div className='gist-forks'>Forked by: {authors}</div>;
};
