import { createContext, useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';

export const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [search, setSearch] = useState('');

/*   
  const navigate = useNavigate();

  useEffect(() => {
    if (search !== '') {
      navigate('/phones');
      setSearch('');
    }
  }, [search, navigate]);

  useEffect(() => {
    if (search === '') {
      navigate(-1);
    }
  }, [search, navigate]);
 */

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;


/* import { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search !== '') {
      window.history.pushState(null, null, '/phones');
    }
  }, [search]);

  useEffect(() => {
    if (search === '') {
      window.history.back();
    }
  }, [search]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider; */
