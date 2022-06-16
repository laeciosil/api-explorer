import { useState, useEffect } from 'react';
import { AppContext } from './AppContext';

function AppProvider({ children }) {
  const [apis, setApis] = useState([]);
  const [editApi, setEditApi] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filterAPi, setFilterAPi] = useState({});
  const [isOpenApiModal, setIsOpenApiModal] = useState(false);

  useEffect(() => {
    async function fecthCategories() {
      const response = await fetch('https://apibr.herokuapp.com/categories');
      const result = await response.json();
      return setCategories(result.categories);
    }
    fecthCategories();
  }, []);

  useEffect(() => {
    async function fecthApis() {
      setIsLoading(true);
      const response = await fetch('https://apibr.herokuapp.com/apis');
      const result = await response.json();
      setIsLoading(false);
      return setApis(result);
    }
    fecthApis();
  }, []);
  const state = {
    categories,
    apis,
    filterAPi,
    setFilterAPi,
    isOpenApiModal,
    setIsOpenApiModal,
    isLoading,
    editApi,
    setEditApi,
  };

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
