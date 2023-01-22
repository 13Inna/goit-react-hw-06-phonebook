import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const { input } = useSelector(getFilter);
  
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
        value={input}
      />
    </label>
  );
}


export default Filter;