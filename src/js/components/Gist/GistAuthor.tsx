import { useMemo } from 'react';
import { GistInterface } from '../../store/initialState';
import ReactTimeAgo from 'react-time-ago';

export const GistAuthor = ({ gist }: { gist: GistInterface }) => {
  // Gists can have more than one file, but for our application we will only take into account the first file of the gist

  const createdAt = useMemo(() => new Date(gist.created_at), [gist.created_at]);
  const fileName = Object.keys(gist.files)?.[0] || 'N/A';

  return (
    <div className='gist-author'>
      <figure className='gist-avatar'>
        <img src={gist.owner.avatar_url} alt={gist.owner.login} />
      </figure>
      <div className='gist-info'>
        <div className='gist-path'>
          <a href={gist.owner.html_url} target='_blank' rel='noopener noreferrer'>
            {gist.owner.login}
          </a>
          /
          <a href={gist.url} target='_blank' rel='noopener noreferrer'>
            {fileName}
          </a>
        </div>
        <div className='gist-date'>
          Created <ReactTimeAgo date={createdAt} />
        </div>
      </div>
    </div>
  );
};
