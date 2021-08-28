import { useState, Suspense, lazy } from 'react';
import { Actions } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { GistInterface } from '../../store/initialState';
import { GistAuthor } from './GistAuthor';
import { GistForks } from './GistForks';
import { GistInfo } from './GistInfo';

// the GistContent component has syntax highlighting, which creating a huge file, so we need to lazy-load it
const GistContent = lazy(() => import('./GistContent'));

export const Gist = ({ gist }: { gist: GistInterface }) => {
  const dispatch = useAppDispatch();
  const loadedGists = useAppSelector(state => state.loadedGists);
  const loadingGists = useAppSelector(state => state.loadingGists);
  const loadingGistsErrors = useAppSelector(state => state.loadGistsErrors);

  const [isOpen, setIsOpen] = useState(false);

  const toggleGistContent = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    if (!(gist.id in loadedGists)) {
      dispatch(Actions.loadGist(gist.id));
    }

    setIsOpen(true);
  };

  console.log({ loadedGists });

  return (
    <li className='gist'>
      <div className='gist-header' onClick={toggleGistContent}>
        <GistAuthor gist={gist} />
        <GistInfo gist={gist} />
      </div>
      <div className='gist-subheader' onClick={toggleGistContent}>
        <GistForks gist={gist} />
      </div>
      <div className='gist-body'>
        {isOpen && (
          <Suspense fallback={<p className='loading-content'>Loading...</p>}>
            <GistContent
              gist={gist}
              loading={loadingGists.includes(gist.id) || false}
              content={loadedGists[gist.id] || null}
              error={loadingGistsErrors[gist.id] || false}
            />
          </Suspense>
        )}
      </div>
    </li>
  );
};

export default Gist;
