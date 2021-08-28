import { useAppSelector } from '../../store/hooks';
import styles from './AuthorInfo.module.scss';

export const AuthorInfo = () => {
  const user = useAppSelector(state => state.user);

  if (!user) return null;

  return (
    <div className={styles.authorInfo}>
      <figure className={styles.avatar}>
        <a
          href={user.html_url}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.user}
        >
          <img src={user.avatar_url} alt={user.login} />
        </a>
      </figure>
      <h2 className={styles.authorName}>{user.name}</h2>
      <p className={styles.username}>{user.login}</p>
      <p className={styles.bio}>{user.bio}</p>
    </div>
  );
};

export default AuthorInfo;
