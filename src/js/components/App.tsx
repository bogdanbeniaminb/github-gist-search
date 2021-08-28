import GistsContainer from './GistsContainer/GistsContainer';
import SearchForm from './SearchForm/SearchForm';

// initialize time-ago globally
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en);

const App = () => {
  return (
    <div className='app-container'>
      <SearchForm />
      <GistsContainer />
    </div>
  );
};

export default App;
