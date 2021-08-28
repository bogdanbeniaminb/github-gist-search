import { GistInterface } from '../../store/initialState';
import { GistTags } from './GistTags';

export const GistInfo = ({ gist }: { gist: GistInterface }) => {
  return (
    <>
      <GistTags gist={gist} />
    </>
  );
};
