import { GistInterface } from '../../store/initialState';
import { GistAuthor } from './GistAuthor';
import { GistForks } from './GistForks';
import { GistInfo } from './GistInfo';

export const Gist = ({ gist }: { gist: GistInterface }) => {
  return (
    <li className='gist'>
      <div className='gist-header'>
        <GistAuthor gist={gist} />
        <GistInfo gist={gist} />
      </div>
      <div className='gist-body'>
        <GistForks gist={gist} />
      </div>
    </li>
  );
};

export default Gist;
