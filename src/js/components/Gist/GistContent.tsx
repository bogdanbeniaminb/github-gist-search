import { GistInterface } from '../../store/initialState';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const GistContent = ({
  gist,
  content,
  loading,
  error,
}: {
  gist: GistInterface;
  loading: boolean;
  content?: string;
  error: false | string;
}) => {
  const language = gist.files?.[0]?.language || 'javascript';

  const isLoading = loading && !error;
  const isError = error;
  const isValid = !isLoading && !isError && content;

  return (
    <div className='gist-content'>
      {isLoading && <p className='loading-content'>Loading...</p>}
      {isError && <p className='gist-content-error'>An error has occured: {error}</p>}
      {isValid && (
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
          {content}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default GistContent;
