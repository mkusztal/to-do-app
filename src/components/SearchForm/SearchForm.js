import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch, searchInputValue } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const dispatch = useDispatch();
  const currentSearchInput = useSelector(searchInputValue);
  const [searchInput, setSearchInput] = useState(currentSearchInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearch({ searchInput }));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder={'Search...'}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
