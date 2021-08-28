import { useAppSelector } from '../../store/hooks';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import Gist from '../Gist/Gist';
import GistsList from '../GistsList/GistsList';
import styles from './GistsContainer.module.scss';

export const GistsContainer = props => {
  const username = useAppSelector(state => state.username);
  const gists = useAppSelector(state => state.gists);
  const loading = useAppSelector(state => state.searching);
  const error = useAppSelector(state => state.searchError);

  if (loading) {
    return (
      <div className={styles.loading}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>An error has occured: {error}.</span>
      </div>
    );
  }

  if (!username) {
    return null;
  }

  if (!gists || !gists.length) {
    return (
      <div className={styles.error}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>
          No gists found for username <b>"{username}"</b>
        </span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.authorInfo}>
        <AuthorInfo />
      </div>
      <div className={styles.gistsList}>
        <GistsList />
      </div>
    </div>
  );
};

export default GistsContainer;
