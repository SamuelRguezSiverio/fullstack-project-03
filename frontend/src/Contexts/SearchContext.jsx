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
      navigate('/smartphones');
    }
  }, [search]);

  // useEffect(() => {
  //   if (isInitialRendered.current === true) {
  //     isInitialRendered.current = false
  //   } else {
  //     if (search === '') {
  //       if (location.pathname !== '/') {
  //         navigate(-1);
  //       }
  //     }
  //   }
  // }, [search]);


  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;

