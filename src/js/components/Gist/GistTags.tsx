import { GistInterface } from '../../store/initialState';

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export const GistTags = ({ gist }: { gist: GistInterface }) => {
  const tags = Object.values(gist.files)
    .map(file => file.language)
    .filter(Boolean)
    .filter(onlyUnique);

  if (!tags.length) {
    return null;
  }

  return (
    <div className='gist-tags'>
      {tags.map(tag => (
        <span
          className={`gist-tag gist-language-${tag.toLowerCase().replace(/[^a-z]/, '-')}`}
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
