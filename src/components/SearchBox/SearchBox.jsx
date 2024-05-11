import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.searchForm}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.field}
        id={searchId}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />{' '}
    </div>
  );
}
