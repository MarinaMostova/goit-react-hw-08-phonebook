import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const data = e.target.value.trim();
    dispatch(setFilter(data));
  };

  return (
    <div className={css.filter}>
      <input
        onChange={onFilterChange}
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        placeholder=" Find contact by name"
      />
    </div>
  );
};

export default Filter;
