import { GistInterface } from '../../store/initialState';

export const GistTags = ({ gist }: { gist: GistInterface }) => {
  const tags = Object.values(gist.files)
    .map(file => file.language)
    .filter(Boolean);

  if (!tags.length) {
    return null;
  }

  return (
    <div className='gist-tags'>
      {tags.map(tag => (
        <span
          className={`gist-tag gist-language-${tag.toLowerCase().replace(/[^a-z]/, '-')}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
