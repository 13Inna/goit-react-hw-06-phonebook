import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(addFilter(name));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        onChange={handleChange}
        name="name"
      />
    </label>
  );
}


export default Filter;