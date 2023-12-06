import { useState } from 'react';
import { notify } from '../fetchApi';
import { Form, Input, Button } from './SearchForm.styled';
import { LuSearch } from 'react-icons/lu';
import Notiflix from 'notiflix';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return Notiflix.Notify.warning(
        'Please enter key words for search.',
        notify
      );
    }
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <Button type="submit">
          <LuSearch size={15}></LuSearch>
        </Button>
      </Form>
    </>
  );
};

export default SearchForm;
