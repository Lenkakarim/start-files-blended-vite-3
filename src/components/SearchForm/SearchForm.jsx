import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onSubmit }) => {
  const handelSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.region.value;
    onSubmit(query);
  };
  return (
    <form className={styles.form} onSubmit={handelSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(({ id, name, value }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchForm;
