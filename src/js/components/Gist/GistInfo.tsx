import { GistInterface } from '../../store/initialState';
import { GistTags } from './GistTags';

export const GistInfo = ({ gist }: { gist: GistInterface }) => {
  return (
    <div className='gist-info'>
      <GistTags gist={gist} />
    </div>
  );
};
