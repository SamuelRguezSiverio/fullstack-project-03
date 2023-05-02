import { createContext, useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [search, setSearch] = useState('');

  const isInitialRendered = useRef(true)

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (search !== '' && location.pathname !== '/phones') {
      navigate('/phones');
    }
  }, [search]);

  useEffect(() => {
    if (isInitialRendered.current === true) {
      isInitialRendered.current = false
    } else {
      if (search === '') {
        navigate(-1);
      }
    }
  }, [search]);


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