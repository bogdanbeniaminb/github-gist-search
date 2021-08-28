import { useAppSelector } from '../../store/hooks';
import Gist from '../Gist/Gist';
import styles from './GistsList.module.scss';

export const GistsList = () => {
  const gists = useAppSelector(state => state.gists);

  if (!gists || !gists.length) {
    return null;
  }

  return (
    <ul className={styles.gistsList}>
      {gists.map(gist => (
        <Gist gist={gist} key={gist.id} />
      ))}
    </ul>
  );
};

export default GistsList;
