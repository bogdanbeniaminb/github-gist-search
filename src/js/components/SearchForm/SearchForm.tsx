import { useForm } from 'react-hook-form';
import { Actions } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './SearchForm.module.scss';

export default function SearchForm(props) {
  const username = useAppSelector(state => state.username);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username,
    },
  });

  const onSubmit = ({ username }) => {
    dispatch(Actions.search(username));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formField}>
        <input
          {...register('username', {
            required: true,
            pattern: /^[^\/]{3,}$/,
          })}
          type='search'
          placeholder='Enter Github Username'
          className={styles.inputField}
        ></input>
        <button type='submit' className={styles.submitButton}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
        {errors.username && (
          <p className={styles.errorMessage}>
            {errors.username.type == 'required'
              ? 'This field is required.'
              : 'Please insert a valid username.'}
          </p>
        )}
      </div>
    </form>
  );
}
