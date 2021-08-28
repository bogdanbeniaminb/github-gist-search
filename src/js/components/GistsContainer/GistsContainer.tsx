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

  console.log({ username, gists, loading });

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>An error has occured: {error}.</p>;
  }

  if (!username) {
    return null;
  }

  if (!gists || !gists.length) {
    return <p>No gists found for username "{username}".</p>;
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
