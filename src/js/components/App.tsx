import SearchForm from './SearchForm/SearchForm';
import { useAppSelector } from '../store/hooks';
import { lazy, Suspense } from 'react';
const GistsContainer = lazy(() => import('./GistsContainer/GistsContainer'));

const App = () => {
  const shouldShowGists = useAppSelector(
    state => state.username || state.searching || state.searchError
  );

  return (
    <div className='app-container'>
      <SearchForm />
      {shouldShowGists && (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>...</p>}>
          <GistsContainer />
        </Suspense>
      )}
    </div>
  );
};

export default App;
